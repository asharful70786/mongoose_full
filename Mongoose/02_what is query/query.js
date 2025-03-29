import Users from "../userModel.js";

// let query = Users.find({ age: { $gt: 18 } }).select("-name -age -hobbier");
// console.log(await query)

// await Users.create({ name: " akib Ankit", age: 15, parentdirId: "67cd48866ba637ade205603d", email: "akibAktar@gmail.com", hobbier: ["Reading", "playing"] });

let user1 = await Users.findOne({ email: "akibAktar@gmail.com" }).populate({
  path: "parentdirId",
  select: "name age email -_id",
  populate: {
    path: "parentdirId",
    select: "name age email"
  }
})
console.log(user1 , "HI")