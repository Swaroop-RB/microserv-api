const express = require("express");
const app = express();

const courseRoutes = require("./routes/courseRoutes");

// correct middleware paths
const logger = require("../../packages/middleware/logger");
const errorHandler = require("../../packages/middleware/errorHandler");

app.use(express.json());
app.use(logger);

app.use("/api", courseRoutes);

app.use(errorHandler);

app.listen(3003, () => {
  console.log("Course Service running on port 3003");
});