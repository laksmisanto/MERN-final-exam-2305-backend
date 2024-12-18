const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    students: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    reviews: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
