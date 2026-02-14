const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
  
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});