// init code
const mongoose = require("mongoose");
const assert = require("assert");
const db_url =
  "mongodb+srv://dipu:dipu@123@cluster0.p2rtc.mongodb.net/fbdata?retryWrites=true&w=majority";
// connection code
mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  function (error, link) {
    // check error
    assert.equal(error, null, "DB Connect Fail...");

    // OK
    console.log("DB Connect Success...");
    //console.log(link);
  }
);
