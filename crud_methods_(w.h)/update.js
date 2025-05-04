const user = await User.findOne({ email: "ankit@gmail.com" });
user.age = 14;
user.save();
//this method run the validation and then save the data

//on the above case there will 2 time call to Database which will be slow

// so we can use findOneAndUpdate method to update the data in one go
// findOneAndUpdate method is used to find a document and update it in one go
const user = await User.findOneAndUpdate(
  { email: "ramesh@gmail.com" },
  { age: 5 },
  { new: true, runValidators: true } //findOneAndUpdate method bypass the validation sop we have to manually add the runValidators: true to run the validation
);
