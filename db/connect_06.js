import mongoose from 'mongoose';

const connectDB_06=(url)=>{
    return mongoose.connect(url);
}

export default connectDB_06