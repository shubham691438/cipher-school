const mongoose=require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Profile =require('./ProfileModel')

const Schema=mongoose.Schema

const UserSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    password:String,
    profileId:{
        type:Schema.Types.ObjectId,
        ref:'Profile'
    }
})


// static signup method
UserSchema.statics.signup = async function(firstName,lastName,email,phone,password) {

    // validation
    if (!firstName) {
      throw Error('First Name is Required')
    }
    if(!lastName){
      throw Error('Last Name is required')
    }
    if(!email){
        throw Error('Email is required')
      }

    if (!validator.isEmail(email)) {
      throw Error('Invalid email address')
    }
    // if (!validator.isStrongPassword(password)) {
    //   throw Error('Password not strong enough')
    // }
    if(password.length<8)
    {
      throw Error("Password is too short")
    }
    if(phone)
    {
      if(phone.length<10)
      {
        throw Error("Phone no is not valid")
      }
    }
  
    const exists = await this.findOne({ email })
  
    if (exists) {
      throw Error('User is already exist, signin Now')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
  
    const user = await this.create({ firstName,lastName,email,phone, password: hashedPassword })
  
    return user
  }
  
  // static signin method
  UserSchema.statics.signin = async function(email, password) {
  
    if (!email) {
      throw Error('Email is required')
    }

    if (!password) {
        throw Error('Password is required')
      }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('email not registered')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }

  //pre to create a new profile document before save signup 
  UserSchema.pre('save', async function(next) {
    if (this.isNew) {
      try {
        const profile = await Profile.create({ userId: this._id });
        // do something with the newly created profile later if needed
        this.profileId=profile._id
        next();
      } catch (err) {
        next(err);
      }
    } else {
      next();
    }
  });
  

module.exports=mongoose.model('User',UserSchema)