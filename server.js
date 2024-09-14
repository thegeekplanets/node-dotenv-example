require("dotenv").config();
require("./config"); // Load environment variables

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    API_URL: process.env.API_URL,
    APP_NAME: process.env.APP_NAME,
    NODE_ENV: process.env.NODE_ENV
  });
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode`);
  console.log(`Listening on port http://localhost:${PORT}`);
});
