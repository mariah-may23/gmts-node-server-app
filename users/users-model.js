import mongoose from "mongoose";
import usersSchema from "./users-schema.js";

const usersModel = mongoose.model(
    'UsersModel', usersSchema)

export default usersModel

// GENERIC FUNCTIONS THAT ALLOW US TO CRUD USERS
