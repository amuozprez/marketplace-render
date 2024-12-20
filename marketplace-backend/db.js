/*const { Pool } = require("pg");

const pool = new Pool({
  user: "alvaro_munoz",
  host: "localhost",
  database: "marketplace",
  password: "18211238-a3163486",
  port: 3163,
});

module.exports = pool;*/

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;