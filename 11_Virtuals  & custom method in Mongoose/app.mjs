//virtuals in mongoose are nothing but are : Document ar upor show hoina aii moto kichu property . like id or createdAt or updatedAt etc
//_Id ar value object and id ar value string pai 
import mongoose from "mongoose";
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

}, {
  additionalProperties: true,
  timestamps: true,
  virtuals: {
    idAdult: {
      get: function () {
        return this.age >= 18
      }
    }

  } ,
  //in that way we can set custom Methods on Document in mongoose
  methods: {
    getFullDetails (){
     return `${this.name} ${this.age} and his hobbies are ${this.hobbies}`
    } , 
    
  } ,
  //by that way we can set custom statics on model or custom methods on model (here  findByParentName or findByemail  )
  statics : {
    findByParentName : function (parentName) {
      return this.find({parentName})
    }
  }
});

const User = mongoose.model('User', userSchema);

const p1 = await User.findByParentName("Momin") //custom statics call on model

// console.log(  p1.getFullDetails() ) //custom method call  on Docs 
// console.log(User.schema.)

console.log(p1)