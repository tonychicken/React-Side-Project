

import { allowedNodeEnvironmentFlags } from "process";
import express from "express";
const app=express();

import dotenv from 'dotenv';
dotenv.config();

import connectDB_06 from './db/connect_06.js'

app.get('/',(req,res)=>{
    res.send('welcome Tony 207410506')
});

const port =process.env.PORT || 5000;

const start=async()=>{
    try{
        await connectDB_06(process.env.MONGO_LOCAL_URL).then(()=>{
            console.log('Connectin to MongoDB');
        });
        app.listen(port,()=>console.log(`Server is running on port ${port}`));

    }catch(err){
        console.log(err);
    }
};

start();


