var express = require("express");
var ejs = require("ejs");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));

console.log("./public");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});
