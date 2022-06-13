import express from "express";
const app = express();

import dotenv from 'dotenv';//process.env.XXXXXXXXX
dotenv.config();


import "express-async-errors"
//DB && authenticateUser
import connectDB_06 from './db/connect_06.js'

//routes
import authRoutes_06 from "./routes/authRoutes_06.js";

//middleware
import notFoundMiddleware_06 from "./middleware/not_found_06.js";
import errorHandlerMiddleware_06 from "./middleware/error.handler_06.js";



app.use(express.json());//傳到前端須可以接收json樣式

app.get('/', (req, res) => {
    // throw new Error('test')
    res.send('welcome Tony 207410506')
});

app.use('/api/v1/auth_06',authRoutes_06);

app.use( notFoundMiddleware_06);
app.use( errorHandlerMiddleware_06);



const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB_06(process.env.MONGO_LOCAL_URL).then(() => {
            console.log('Connectin to MongoDB');
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`));

    } catch (err) {
        console.log(err);
    }
};

start();


