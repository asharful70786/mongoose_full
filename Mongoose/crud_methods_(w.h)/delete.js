const user = await User.findOneAndDelete({ email: "ankit@gmail.com" });
// and there is many more 