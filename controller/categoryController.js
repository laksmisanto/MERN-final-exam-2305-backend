const categorySchema = require("../model/categorySchema");
async function createCategoryController(req, res) {
  const { name, courses } = req.body;

  try {
    let existingCategory = await categorySchema.find({ name });

    if (existingCategory.length > 0) {
      res.status(404).send({ error: "category name is already exist" });
    } else {
      const category = new categorySchema({ name, courses });
      category.save();
      res
        .status(201)
        .send({ message: "Category created successfully", category });
    }
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}
async function updateCategoryController(req, res) {
  const { _id, name, courses } = req.body;
  try {
    const updateCategory = await categorySchema.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: name,
          courses: courses,
        },
      },
      { new: true }
    );
    res
      .status(201)
      .send({ success: "category update successful", updateCategory });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}
async function deleteCategoryController(req, res) {
  const { _id } = req.body;

  try {
    const deleteCategory = await categorySchema.findByIdAndDelete({ _id });
    res.status(201).send({ success: "category delete ", deleteCategory });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}
async function allCategoryController(req, res) {
  try {
    const category = await categorySchema.find({});
    if (category.length > 0) {
      res.send(category);
    } else {
      res.status(404).send({ error: "category not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}

module.exports = {
  createCategoryController,
  allCategoryController,
  deleteCategoryController,
  updateCategoryController,
};
