import mongoose, { Schema } from "mongoose";

const user = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    unique: true,
    lowercase: true,
    trim: true,

  },
  hobbies: ["string"],
  parentdirId: {
    type: Schema.Types.ObjectId,
    required: function () {
      return this.age < 16;
    },
    ref : "User",
    default: null
  }

}, {
  strict: "throw", //obey the Schema validation and if user add it throw and error 
  timestamps: true, // automatically add createdAt and updatedAt docs 
  // versionKey: "__version__", // we can set our version key like that
  // collection: "users"  //we can set our collectionName from here and its most in priority
}
)

const User = mongoose.model('User', user);

export default User;


