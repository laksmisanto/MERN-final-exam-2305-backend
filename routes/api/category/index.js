const express = require("express");
const router = express.Router();
const {
  createCategoryController,
  allCategoryController,
  deleteCategoryController,
  updateCategoryController,
} = require("../../../controller/categoryController");

router.post("/createcategory", createCategoryController);
router.get("/allcategory", allCategoryController);
router.post("/deletecategory", deleteCategoryController);
router.post("/updatecategory", updateCategoryController);

module.exports = router;
