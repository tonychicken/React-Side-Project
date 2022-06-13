import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware_06=(err,req,res,
    next)=>{
    console.log('error',err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err })
    
};

export default errorHandlerMiddleware_06;