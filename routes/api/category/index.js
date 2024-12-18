const express = require("express");
const router = express.Router();
const {
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
  allCategoryController,
} = require("../../../controller/categoryController");

router.post("/createcategory", createCategoryController);
router.post("/updatecategory", updateCategoryController);
router.post("/deletecategory", deleteCategoryController);
router.get("/allcategory", allCategoryController);

module.exports = router;
