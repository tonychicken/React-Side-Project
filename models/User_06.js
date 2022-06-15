import mongoose from "mongoose";
import validator from "validator";//npm套件，主要功能為辨別passwoed、email.....
import bcrypt from "bcryptjs";//注意必須是此路徑，不可使用自動填入的
import  Jwt  from "jsonwebtoken";

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
        validate: {
            validator: validator.isEmail,
            message: "please provide vaild email",
        },
        unique: true,
    },
    password: {
        type: String,
        requires: [true, 'please procide password'],
        minlength: 6,
        select: false,
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 30,
        default: 'lastName',
    },
    location: {
        type: String,
        trim: true,
        maxlength: 30,
        default: 'my city',
    },
});

UserSchema_06.pre('save', async function () {
    // console.log('password',this.password);
    const salt = await bcrypt.genSalt(10);//Salt產生亂碼，預設跑10次(足夠難破解)
    this.password = await bcrypt.hash(this.
    password, salt)
});

UserSchema_06.methods.createJWT=function(){
    console.log("this",this);//this這邊表示輸入的全部的資料
    return Jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME});//jwt.sign 可創token
};

UserSchema_06.methods.comparePassword=async function(password) {
    const isMatch=await bcrypt.compare(password,this.password);//加密後產生的Token(單向且唯一)與登入的Token(單向且唯一)，比對正確後即可true。
    return isMatch;
};

export default mongoose.model('User_06', UserSchema_06);