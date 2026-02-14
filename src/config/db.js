const Database = require("better-sqlite3");

const db = new Database("database.db");


db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT,
    status TEXT DEFAULT 'active'
  )
`).run();

module.exports = db;