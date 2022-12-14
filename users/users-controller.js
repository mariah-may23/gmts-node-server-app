import * as dao from './users-dao.js'
import res from "express/lib/response.js";
import {findByCredentials, findByUsername, findUserById} from "./users-dao.js";

//APIS FOR BEING ABLE TO CREATE,RETREIVE,DELETE,UODATE SPECIFIC USERS
let currentUser = null;
const usersController = (app) => {


    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers()
        res.json(users)
    }

    const findUserById = async (req, res) => {
        //const users = await dao.findAllUsers()
        const uid = req.params.uid
        console.log("printing user")
        console.log(uid)
        const status = await dao.findUserById(uid)
        res.json(status)

    }

    const deleteUser = async (req, res) => {
        const uid = req.params.uid

        const status = await dao.deleteUser(uid)
        res.json(status)
    }

    const updateUser = async (req, res) => {
        const uid = req.params.uid
        const updates = req.body
        const status = await dao.updateUser(uid, updates)
        res.json(status)
    }

    const register = async (req,res) => {
        const user = req.body
        const existingUser = await findByUsername(user.userName)
       if(existingUser) {
            res.sendStatus(403)
            return
        }

        const actualUser = await dao.createUser(user)
        currentUser = actualUser
        res.json(actualUser)

    }

    const login = async (req,res) => {
        const credentials = req.body
        const existingUser = await findByCredentials(credentials.userName, credentials.password)
        if(!existingUser){
            res.sendStatus(403)
            return
        }
        currentUser = existingUser
        res.json(existingUser)

    }

    const profile = async (req,res) => {
        if(currentUser){
            res.json(currentUser)
            return
        }
        res.sendStatus(403) //no one is logged in
    }

    const logout = (req,res) => {
        currentUser = null
        res.sendStatus(200) //successfully logged out
    }

    app.post('/users', createUser)
    app.post('/register', register)
    app.get('/users', findAllUsers)
    app.get('/users/:uid', findUserById)
    app.delete('/users/:uid', deleteUser)
    app.put('/users/:uid', updateUser)
    app.post('/login',login)
    app.post('/profile', profile) // retrieve current profile
    app.post('/logout', logout)

    //CREATED TEST CASES IN POSTMAN

}
export default usersController