import mongoose from 'mongoose';
import User from './userModel';

await mongoose.connect('mongodb://127.0.0.1:27017/test');
console.log('Connected to MongoDB'); 

let p1 = User.find()