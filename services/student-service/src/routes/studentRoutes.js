const express = require("express");
const router = express.Router();

router.get("/students", (req, res) => {
  res.json([
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" }
  ]);
});

module.exports = router;