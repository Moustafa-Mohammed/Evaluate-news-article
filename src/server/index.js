const fetchURL = require("./fetchURL");
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("dist"));

app.get("/", (_req, res) => {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.listen(3000, () => {
  console.log("App is listening on port 8081!");
});

app.post("/userData", fetchURL);
