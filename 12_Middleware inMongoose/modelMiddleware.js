// never use  async + next combination.
// using async, you should not use next() at all.
// Also, in Mongoose, the correct order of parameters is:
// userSchema.pre("insertMany", function (next, docs) {});


import mongoose from 'mongoose';


await mongoose.connect('url');
console.log('Connected to MongoDB');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    alias: 'username'
  },
  age: Number,
  password: String,
  hobbies: [String],
  isStudent: Boolean,
  parentName: String,
  address: {
    city: String,
    country: String
  }

}
)
//this is Before save Document
//here we can performance any kind of  logic an hard 
userSchema.pre("insertMany", function (next, doc) {
  doc.map((item) => {
    item.password = item.name + item.age
  });
  console.log(doc)
  ;
  next();
});


// userSchema.post("insetMany", async function (doc, next) {
//   console.log(doc);
//   console.log(`your password is ${this.password}`);
//   next();
// });


const User = mongoose.model('User', userSchema);

let result = await User.insertMany([
  {
    name: "bitto",
    age: 13,
    email: "Ankit@gmail.com",
    hobbies: ["Coding"],
    parentId: "67ca9831f62d3420efddb6ff",
  },
  {
    name: "Shyam",
    age: 13,
    email: "Shyam@gmail.com   ",
    hobbies: ["Coding"],
    parentId: "67ca9831f62d3420efddb6ff",
  },
])
// console.log(p1);

