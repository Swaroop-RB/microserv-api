const express = require("express");
const router = express.Router();

router.get("/colleges", (req, res) => {
  res.json([
    { id: 1, name: "IIT" },
    { id: 2, name: "NIT" }
  ]);
});

module.exports = router;