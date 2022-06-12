import express from 'express';
const router =express.Router();


import {
    register_06,
    Login_06,
    updateUser_06,
} from "../controllers/authController_06.js";


router.route('/register_06').post(register_06);
router.route('/Login_06').post(Login_06);
router.route('/updateUser_06').patch(updateUser_06);

export default router;
