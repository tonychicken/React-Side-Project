import User_06 from "../models/User_06.js";

const register_06 = async (req, res) => {
    console.log('body', req.body);
    const user =await User_06.create(req.body);
    res.status(201).json({ user });
    // res.send('register user -- Tony Zhan , 207410506');
}

const Login_06 = async (req, res) => {
    res.send('Login user -- Tony Zhan , 207410506');
}
const updateUser_06 = async (req, res) => {
    res.send('update user -- Tony Zhan , 207410506');
}

export { register_06, Login_06, updateUser_06 };