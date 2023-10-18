const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


// serving client files from node server
app.use(express.static("client/dist"));

const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT || 8080, (req, res) => {
  console.log(`Server listening on ${process.env.PORT}`);
});