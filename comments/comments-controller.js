import * as commentDao from "./comments-dao.js"
import * as likesDao from "../likes/likes-dao.js";

const createComment = async (req, res) => {
    const newComment = req.body
    const insertedComment = await commentDao.createComment(newComment)
    res.json(insertedComment)
}

const findComments  = async (req, res) => {
    const comments = await commentDao.findComments()
    res.json(comments)
}


const deleteComment = async (req, res) => {
    const cid = req.params.cid
    const status = await commentDao.deleteComment(cid)
    res.json(status)
}
const findSneakersCommentedByUser = async (req, res) => {
    const uid = req.params.uid
    const sneakers = await commentDao.findSneakersCommentedByUser(uid)
    res.json(sneakers)
}

export default (app) => {
    app.post('/comments', createComment);
    app.get('/comments', findComments);
    app.delete('/comments/:cid', deleteComment);
    app.get('/comments/:uid', findSneakersCommentedByUser)
}