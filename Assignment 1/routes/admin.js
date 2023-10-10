const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "Views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  res.send(`<h1>${req.body.title}</h1>`);
});

module.exports = router;
