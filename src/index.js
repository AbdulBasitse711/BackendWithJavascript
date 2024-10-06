// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()







// Connect to MongoDB First approaah

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";

// const app = express();


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.error("Error connecting to MongoDB:", err);
//             throw err;
//         })
//         console.log("Connected to MongoDB!")
//         app.listen(process.env.PORT, () => console.log(`App is listening on port ${process.env.PORT}`));
//     } catch (error) {
//         console.error("Failed to connect to MongoDB:", error);
//     }
// })(); //Function that runs immediately 

