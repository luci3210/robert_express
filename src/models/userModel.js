const db = require("../database/db");

const User = {
  getAll() {
    return db.prepare("SELECT * FROM users").all();
  },

  create(name, email, password) {
    const stmt = db.prepare(
      "INSERT INTO users (name, email, password, status) VALUES (?, ?, ?, ?)"
    );
    return stmt.run(name, email, password, "active" ).lastInsertRowid;
  }
};

module.exports = User;