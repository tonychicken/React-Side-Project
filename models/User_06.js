import mongoose from "mongoose";
import validator from "validator";//npm套件，主要功能為
import bcrypt from "bcryptjs";

const UserSchema_06 = new mongoose.Schema({
    name: {
        type: String,
        requires: [true, 'please procide name'],
        minlength: 3,
        maxlength: 20,
        trim: true, //砍掉空白部分
    },
    email: {
        type: String,
        requires: [true, 'please prvide email'],
        validate:{
          validator:validator.isEmail,
          message:"please provide vaild email",  
        },
        unique:true,
    },
    password : {
        type: String,
        requires: [true, 'please procide passeord'],
        minlength: 6,
        select:false,
    },
    lastName : {
        type: String,
        trim:true,
        maxlength: 30,
        default:'lastName',
    },
    location : {
        type: String,
        trim:true,
        maxlength: 30,
        default:'my city',
    },
});

UserSchema_06.pre('save',async function(){
    const salt=bcrypt.genSalt(10);//Salt產生亂碼，預設跑10次(足夠難破解)
});

export default mongoose.model('User_06', UserSchema_06);