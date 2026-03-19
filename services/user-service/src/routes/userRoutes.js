const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Swaroop" },
    { id: 2, name: "User 2" }
  ]);
});

module.exports = router;