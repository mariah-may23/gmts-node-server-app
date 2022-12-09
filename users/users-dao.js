import usersModel from "./users-model.js";
import res from "express/lib/response.js";

//QRAPS LOWLEVEL MODELS INSIDE HIGHER LEVEL API THATS SPECIFIC TO OUR GMTS USERS

export const createUser = (user) =>
    usersModel.create(user)

export const findAllUsers = () =>
    usersModel.find()

export const findUserById = (uid) =>
    usersModel.findById()

export const findByUsername = (userName) =>
    usersModel.findOne({userName: userName})

export const findByCredentials = (userName, password) =>
    usersModel.findOne(
        {userName,password},
        {password:false})
// IF WE FIND A USER, WE DONT WANT TO PASS THE PASSWORD OUTSIDE OF OUR SERVER

export const deleteUser = (uid) =>
    usersModel.deleteOne({_id:uid})

export const updateUser = (uid, userUpdates) =>
    usersModel.updateOne({_id:uid},
                         {$set:userUpdates})