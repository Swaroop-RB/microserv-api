const express = require("express");
const app = express();

const studentRoutes = require("./routes/studentRoutes");

// middleware
const logger = require("../../packages/middleware/logger");
const errorHandler = require("../../packages/middleware/errorHandler");

app.use(express.json());
app.use(logger);

app.use("/api", studentRoutes);

app.use(errorHandler);

app.listen(3002, () => {
  console.log("Student Service running on port 3002");
});