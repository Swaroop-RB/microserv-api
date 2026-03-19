const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

// correct middleware paths
const logger = require("../../packages/middleware/logger");
const errorHandler = require("../../packages/middleware/errorHandler");

app.use(express.json());
app.use(logger);

app.use("/api", userRoutes);

// error handler (last)
app.use(errorHandler);

app.listen(3001, () => {
  console.log("User Service running on port 3001");
});