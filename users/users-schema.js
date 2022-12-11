import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        firstName: String,
        lastName: String,
        dateJoined: String,
        dateOfBirth: String,
        address1: String,
        address2: String,
        city: String,
        state: String,
        zipcode: String,
        email: String,
        uid: Number,

        type : {type:String, enum: ['BUYER', 'SELLER', 'ADMIN']}
    },  {collection: 'users'})
export default usersSchema