import mongoose from "mongoose";
import User from "./UserModel.js";

await User.init();

try {
  const user = await User.insertOne({
    name: "ashraful",
    age: 20,
    email: "ashraful@gmail.com",
  });
  console.log(user);
} catch (err) {
  console.log(err);
}

await mongoose.disconnect();
