const categorySchema = require("../model/categorySchema");
const courseSchema = require("../model/courseSchema");

async function createCourseController(req, res) {
  const { name, description, price, duration, students, categoryId } = req.body;

  try {
    let existingCourse = await courseSchema.find({ name });

    if (existingCourse.length > 0) {
      res.status(404).send({ error: "course name is already exist" });
    } else {
      const course = new courseSchema({
        name,
        description,
        price,
        duration,
        students,
        categoryId,
      });
      await course.save();
      await categorySchema.findOneAndUpdate(
        { _id: categoryId },
        { $push: { courseId: course._id } },
        { new: true }
      );
      res.status(201).send({ message: "Course created successfully", course });
    }
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}
async function updateCourseController(req, res) {
  const { _id, name, description, price, duration, students } = req.body;
  try {
    const updateCategory = await categorySchema.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: name,
          description: description,
          price: price,
          duration: duration,
          students: students,
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
async function deleteCourseController(req, res) {
  const { _id } = req.body;
  try {
    const deleteCourse = await courseSchema.findByIdAndDelete({ _id });
    res.status(201).send({ success: "course delete successful", deleteCourse });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}
async function allCourseController(req, res) {
  try {
    const allCourse = await courseSchema.find({});
    if (allCourse.length > 0) {
      res.send(allCourse);
    } else {
      res.status(404).send({ error: "Course not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}

module.exports = {
  createCourseController,
  updateCourseController,
  deleteCourseController,
  allCourseController,
};
