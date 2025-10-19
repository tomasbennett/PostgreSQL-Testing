const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM username_testing_project.usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO username_testing_project.usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  insertUsername
};
