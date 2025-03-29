//insert Methods how many way we can see , there bahavior accopr to task
import User from "../userModel.js";
await User.insertOne({
  name: "Ankit",
  age: 13,
  email: "Ankit@gmail.com",
  hobbies: ["Coding"],
  parentId: "67ca9831f62d3420efddb6ff",
});

await User.create({
  name: "Ankit",
  age: 13,
  email: "Ankit@gmail.com",
  hobbies: ["Coding"],
  parentId: "67ca9831f62d3420efddb6ff",
});

await User.create([
  {
    name: "Ram",
    age: 13,
    email: "Ram@gmail.com   ",
    hobbies: ["Coding"],
    parentId: "67ca9831f62d3420efddb6ff",
  },
  {
    name: "Shyam",
    age: 13,
    email: "Shyam@gmail.com   ",
    hobbies: ["TT"],
    parentId: "67ca9831f62d3420efddb6ff",
  },
]);


const user = new User({
  name: "Jay",
  age: 13,
  email: "jay@gmail.com",
  hobbies: ["Coding"],
  parentId: "67ca9831f62d3420efddb6ff",
});

user.age = 20;  /// save on node js memory not save on DataBAse yet
user.hobbies.push("Cooking");

const data = await user.save();
console.log(data);