const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const tasksroutes = require("./routes/tasks");
const loginroutes = require("./routes/login");
require("dotenv/config");
app.use(express.json());
app.use(cors());
app.use("/tasks", tasksroutes);
mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.URL}/myFirstDatabase?retryWrites=true&w=majority`,
  () => {
    console.log("Database Connected");
  }
);
app.use("/login", loginroutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
