import express from "express";
const app = express();

import dotenv from 'dotenv';//process.env.XXXXXXXXX
dotenv.config();


import "express-async-errors"
//DB && authenticateUser
import connectDB_06 from './db/connect_06.js'

//routes
import authRoutes_06 from "./routes/authRoutes_06.js";
// import cors from 'cors';
//middleware
import notFoundMiddleware_06 from "./middleware/not_found_06.js";
import errorHandlerMiddleware_06 from "./middleware/error.handler_06.js";
import morgan from "morgan";

if(process.env.NODE_ENV !== 'production'){ //若非上線production，則
    app.use(morgan('dev'));
}

// app.use(cors());
app.use(express.json());//傳到後端須可以接收json樣式

app.get('/', (req, res) => {
    // throw new Error('test')
    // res.send('welcome Tony 207410506');
    res.json({msg:'welcome Tony 207410506'});
});

// app.use('/api/v1', function (req, res, next) {
//     const targetURL = req.header('Target-URL');
//     fetch(targetURL + req.url)
//       .then(res => res.json())
//       .then(json => {
//         res.json(json)
//       });
//   });

app.get('/api/v1', (req, res) => {
    // // throw new Error('test')
    // res.send('welcome Tony 207410506');
    res.json({msg:'welcome To /api/v1'});
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


