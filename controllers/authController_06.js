import User_06 from "../models/User_06.js";
import {StatusCodes} from 'http-status-codes';
import {BadRequestError,UnAuthenticatedError} from "../errors/index.js";

const register_06 = async (req, res,next) => { //next 往後端送
    
    console.log('body', req.body);
    const user = await User_06.create(req.body);//寫進mongodb
    const token=user.createJWT();//使用model的方法createJWT
    
    res.status(StatusCodes.CREATED).json({ user,token,location:user.location });

    // try {
    //     console.log('body', req.body);
    //     const user = await User_06.create(req.body);//寫進mongodb
    //     const token=user.createJWT();//使用model的方法createJWT
        
    //     res.status(201).json({ user,token });
    //     // res.send('register user -- Tony Zhan , 207410506');

    // } catch (err) {
    //     // res.status(500).json({ msg: "Error on registering user" });
    //     next(err);
    // }
}

const Login_06 = async (req, res) => {
    console.log('login data',req.body);
    const{email,password}=req.body;
    if(!email || !password){ //檢查欄位是否為空
        throw new BadRequestError('please provide all value');
    }

    const user=await User_06.findOne({email}).select('+password');//透過唯一的email，找到登入資料，並select密碼串近來。
    if(!user){//若無此email表示沒有資料，則error報錯
        throw new UnAuthenticatedError('Invalid Credentails');
    }
    console.log('logined!',user);

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){//若密碼比對錯誤，則error報錯.
        throw new UnAuthenticatedError('Invalid Credentails');
    }

    const token =user.createJWT();//若EMAIL、PASSWORD接正確，產生JWTtoken
    user.password=undefined; //並把密碼紀錄消除
    res.status(StatusCodes.OK).json({
        user,
        token,
        location:user.location,
    });

    // res.send('Login user -- Tony Zhan , 207410506');
}
const updateUser_06 = async (req, res) => {
    res.send('update user -- Tony Zhan , 207410506');
}

export { register_06, Login_06, updateUser_06 };