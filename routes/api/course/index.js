const express = require("express");
const {
  createCourseController,
  updateCourseController,
  deleteCourseController,
  allCourseController,
} = require("../../../controller/courseController");
const router = express.Router();

router.post("/createcourse", createCourseController);
router.post("/updatecourse", updateCourseController);
router.post("/deletecourse", deleteCourseController);
router.get("/allcourse", allCourseController);

module.exports = router;
