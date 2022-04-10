import { graphQLSchemaExtension } from '@keystone-6/core';
import { KeystoneContext, PollWhereInput } from '.keystone/types';

const gql = ([content]: TemplateStringsArray) => content;

async function clearVote(
  _context: KeystoneContext,
  pollFilter: PollWhereInput
) {
  const context = _context.sudo();
  if (!context.session) {
    throw new Error('You must be signed in to vote');
  }

  const answers = await context.db.PollAnswer.findMany({
    where: {
      poll: pollFilter,
      answeredByUsers_some: { id: context.session.itemId },
    },
  });

  if (answers.length) {
    await context.db.PollAnswer.updateMany({
      data: answers.map((answer: any) => ({
        where: { id: answer.id },
        data: {
          answeredByUsers: { disconnect: { id: context.session.itemId } },
        },
      })),
    });
  }
}

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: gql`
    type Mutation {
      voteForPoll(answerId: ID!): Boolean
      clearVoteForPoll(pollId: ID!): Boolean
    }
  `,
  resolvers: {
    Mutation: {
      async clearVoteForPoll(rootVal, { pollId }, context) {
        await clearVote(context as KeystoneContext, { id: pollId });
      },
      async voteForPoll(rootVal, { answerId }, _context) {
        const context = _context.sudo() as KeystoneContext;
        clearVote(context, { answers: { some: { id: answerId } } });
        await context.db.PollAnswer.updateOne({
          where: { id: answerId },
          data: {
            answeredByUsers: { connect: { id: context.session.itemId } },
          },
        });
      },
    },
  },
});