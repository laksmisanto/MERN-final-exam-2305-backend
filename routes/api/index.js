const express = require("express");
const router = express.Router();
const category = require("./category");
const course = require("./course");

router.use("/category", category);
router.use("/course", course);

module.exports = router;
