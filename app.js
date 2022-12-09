import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import UsersController from "./users/users-controller.js";

const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   serverSelectionTimeoutMS: 5000,
   autoIndex: false,
   maxPoolSize: 10,
   socketTimeoutMS: 45000,
   family: 4
};


mongoose.connect('mongodb://localhost:27017/cs5610-fa22', options);
// load the mongoose library
// connect to the database

const app = express();
app.use(cors())
app.use(express.json())
//usercontroller using the app to register the url it would go to findallusers
//go out to the dao which users usermodel find which uses an array of all records in that collections
//dao returning a promise that is resolved when data comes back
UsersController(app)
app.listen(4000)


