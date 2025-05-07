
import mongoose from 'mongoose';


await mongoose.connect("url here");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    alias: 'username'
  },
  age: Number,
  hobbies: [String],
  isStudent: Boolean,
  parentName: String,
  address: {
    city: String,
    country: String
  }

}
)
 userSchema.pre('find',(next) =>{
  console.log('Before saving data');
  next();
})


const User = mongoose.model('User', userSchema);

let p1 = await User.find({ name: 'Aisha'});
console.log(p1)