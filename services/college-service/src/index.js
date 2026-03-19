const express = require("express");
const app = express();

const collegeRoutes = require("./routes/collegeRoutes");

// correct middleware paths
const logger = require("../../packages/middleware/logger");
const errorHandler = require("../../packages/middleware/errorHandler");

app.use(express.json());
app.use(logger);

app.use("/api", collegeRoutes);

app.use(errorHandler);

app.listen(3004, () => {
  console.log("College Service running on port 3004");
});