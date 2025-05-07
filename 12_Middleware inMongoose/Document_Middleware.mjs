
import mongoose from 'mongoose';
import crypto from 'crypto';

await mongoose.connect('url here ');


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
userSchema.pre("save", async function () {
  console.log("document  middleware Run");
  this.password = crypto.hash("sha256", this.name + this.age).toString('hex');
  console.log(this)
});

//this is After save Document

userSchema.post("save", async function () {
  console.log("document  middleware Run");

  console.log(`your password is ${this.password}`);
});


const User = mongoose.model('User', userSchema);

let p1 = await User.create({ name: 'ashraful', age: 29, hobbies: ["Reading", "playing"] });
console.log(p1);

