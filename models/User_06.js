import mongoose from "mongoose";

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
        default:'my cityx   ',
    },
});


export default mongoose.model('User_06', UserSchema_06);