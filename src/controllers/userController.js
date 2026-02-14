const User = require("../models/userModel");

exports.getUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name, email, password } = req.body;

  const result = User.create(name, email, password);

  res.json({
    id: result.lastInsertRowid,
    name,
    email,
    password
  });
};