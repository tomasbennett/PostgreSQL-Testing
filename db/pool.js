const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "tjsbe",
    database: "top_users",
    password: process.env.DATABASE_PASSWORD,
    port: 5432
});