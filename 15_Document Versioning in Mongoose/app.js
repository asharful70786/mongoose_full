
import mongoose from 'mongoose';

await mongoose.connect('url').then(() => console.log('connected to mongodb')).catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    alias: 'username'
  },
  age: Number,
  password: String,
  hobbies: [String],
  balance: Number,
  isStudent: Boolean,
  parentName: String,
  address: {
    city: String,
    country: String
  }
}, {
  optimisticConcurrency: true,
});


const User = mongoose.model('User', userSchema);
const p1 = await User.findOne();
const p2 = await User.findOne();












// p1.balance += 100;
// await p1.save();
// console.log(p1)

// p2.balance += 2000;
// await p2.save();
// console.log(p2)

