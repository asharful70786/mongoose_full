const user = await User.findOne({ email: "ankit@gmail.com" });
user.age = 14;
user.save();

const user = await User.findOneAndUpdate(
  { email: "ramesh@gmail.com" },
  { age: 5 },
  { new: true, runValidators: true }
);
