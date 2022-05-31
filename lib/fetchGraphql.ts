const ENDPOINT = `${process.env.NEXT_PUBLIC_FONTDUE_URL}/graphql`;

const fetchGraphql = async <Q, V = void>(
    query: string,
    variables: V | void
): Promise<Q> => {

    const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({ query, variables }),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.status !== 200) {
        throw new Error('Fontdue request failed');
    }

    const json = response.json();

    // console.log('json', json)
    const errorMessage = json.errors?.[0]?.message;
    if (errorMessage) {
        throw new Error(`Fontdue graphql request error: ${errorMessage}`);
    }

    return json;
};

export default fetchGraphql;