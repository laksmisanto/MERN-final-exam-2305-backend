const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
var cors = require("cors");
require("dotenv").config();

app.use(cors());
dbConfig();
const routes = require("./routes");

// Middleware
app.use(express.json());

// Routes
app.use(routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
