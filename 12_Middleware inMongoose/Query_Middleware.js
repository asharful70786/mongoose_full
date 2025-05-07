
import mongoose from 'mongoose';
// import User from '../userModel.js';

await mongoose.connect('url here ');
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
userSchema.pre("find", async function () {
 this.find({ age: { $gte: 30 } })
});

//this is After save Document

// userSchema.post("save", async function () {
//   console.log("document  middleware Run");

//   console.log(`your password is ${this.password}`);
// });


const User = mongoose.model('User', userSchema);

let p1 = await User.find({ name: "ashraful" })
console.log(p1);

