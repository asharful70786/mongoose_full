import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:admin@localhost", {
  //   autoIndex: false,
});
console.log("Database connection requested");

console.log("Running DB.js");
