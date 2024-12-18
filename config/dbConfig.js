const { default: mongoose } = require("mongoose");

function dbConfig() {
  try {
    mongoose
      .connect(process.env.DBURL)
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("database connection error: ", error);
  }
}

module.exports = dbConfig;
