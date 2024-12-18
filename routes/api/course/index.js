const express = require("express");
const router = express.Router();

router.post("/getCourse", getcourse);

module.exports = router;
