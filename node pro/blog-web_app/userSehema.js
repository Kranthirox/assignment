const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require('joi')
const { v4: uuidv4 } = require('uuid');
const { string } = require("joi");


const UserSchema = new Schema({
  id:{type:String,unique:true,required:true,unique:uuidv4 },
  username: {type:String,required:true,minlength:5,maxlength:50},
  email: {type:String,required:true,minlength:5,maxlength:255},
  password: {type:String,required:true,minlength:5,maxlength:1024},
  contact:{
  type:Number,
  required:true,
  unique:true,
  minlength:5,
  maxlength:255
  },
  DOB:{
    type:String,
    required:true,
    minlength:5,
    maxlength:50
  },
  CreatedOn: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  }
});

function validateUser(){
  username:Joi.string().min().max().required
}

module.exports=UserSchema;

