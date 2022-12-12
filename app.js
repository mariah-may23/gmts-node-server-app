import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import UsersController from "./users/users-controller.js";
import CommentController from "./comments/comments-controller.js";
import LikesController from "./likes/likes-controller.js";

const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   serverSelectionTimeoutMS: 5000,
   autoIndex: false,
   maxPoolSize: 10,
   socketTimeoutMS: 45000,
   family: 4
};

const CONNECTION_STRING = 'mongodb+srv://FullStackers:cs5610@cluster0.rsy6kny.mongodb.net/?retryWrites=true&w=majority'

//mongoose.connect('mongodb://localhost:27017/cs5610-fa22', options);

mongoose.connect('mongodb+srv://FullStackers:cs5610@cluster0.rsy6kny.mongodb.net/GMTS?retryWrites=true&w=majority', options);


// load the mongoose library
// connect to the database


const app = express();
app.use(cors())
app.use(express.json())
//usercontroller using the app to register the url it would go to findallusers
//go out to the dao which users usermodel find which uses an array of all records in that collections
//dao returning a promise that is resolved when data comes back
UsersController(app)
CommentController(app)
LikesController(app)

app.listen(4000)


