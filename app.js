const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Learn Express" },
  { id: 2, title: "Connect React" }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title
  };

  tasks.push(newTask);
  res.json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("API running on http://localhost:5000");
});
    