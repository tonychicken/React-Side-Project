import User_06 from "../models/User_06.js";
import {StatusCodes} from 'http-status-codes';

const register_06 = async (req, res,next) => { //next 往後端送
    
    console.log('body', req.body);
    const user = await User_06.create(req.body);//寫進mongodb
    const token=user.createJWT();//使用model的方法createJWT
    
    res.status(StatusCodes.CREATED).json({ user,token });

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
    res.send('Login user -- Tony Zhan , 207410506');
}
const updateUser_06 = async (req, res) => {
    res.send('update user -- Tony Zhan , 207410506');
}

export { register_06, Login_06, updateUser_06 };