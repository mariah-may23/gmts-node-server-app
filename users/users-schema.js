import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    married: Boolean,
    type : {type:String, enum: ['BUYER', 'SELLER', 'ADMIN']}
    },  {collection: 'users'})
export default usersSchema