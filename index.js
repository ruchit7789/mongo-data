const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

async function anil() {
  return await mongoose.connect(
    `mongodb+srv://${process.env.MAIL}:${process.env.PASSWORD}@ruchitlabs.pfxjtvv.mongodb.net/?retryWrites=true&w=majority`
  );
}

let po = anil();

po.then((d) => {
  //   console.log("connected");
  ////////// you have it define schema ///
  /////////// creating collectu=ion
  const students = mongoose.model("students", { name: String });

  const student1 = new students({ name: "PANKAj" });

  let po = student1.save();

  po.than(() => {
    console.log("saved");
  }).catch(() => {});
}).catch((err) => {});
/////////////////////////////////////
app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.json({
    msg: "hello it is my india",
  });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
