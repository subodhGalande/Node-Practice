const express = require("express");

const path = require("path");

const rootDir = require("./util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "file1.html"));
});

module.exports = router;
