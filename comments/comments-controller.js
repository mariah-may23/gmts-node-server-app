import * as commentDao from "./comments-dao.js"

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

export default (app) => {
    app.post('/comments', createComment);
    app.get('/comments', findComments);
    app.delete('/comments/:cid', deleteComment);
}