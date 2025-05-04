import User from "./UserModel.js";

 await User.findOne({ email: "ankit@gmail.com" }).lean();
//findOne method return a query , that a thenable Object  // its not a promise ==== always remember that 

//lean means patla . only give us the data
await User.find().lean();

//lean method only take the  required into not to load on server