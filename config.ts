// 3000 is standard for node apps
// Once deployed, Heroku will supply this var to your app
export const PORT = parseInt(process.env.PORT) || 3000;

// Postgres DB URL
// export const DATABASE_URL = process.env.DATABASE_URL || 'postgres://yoqutnlrgqzijv:1aadb8ec312ab4ffa36932d3299dd2a9a4f30851d79c01272dd4f529006d8811@ec2-34-230-198-12.compute-1.amazonaws.com:5432/d7cg037pot5h3c'
export const DATABASE_URL = process.env.SESSION_MAX_AGE || 'postgres://dmitriy_a:Derparol12@localhost:5432/total_skin';
  // process.env.DATABASE_URL || `postgres://${process.env.USER}:${process.env.USER_PASS}@localhost/${process.env.DATEBASE_NAME}`;

// Default to 30 days
export const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;

export const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  require('crypto')
    .randomBytes(32)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]+/g, '');
