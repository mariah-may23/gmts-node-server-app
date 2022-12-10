import * as commentDao from "./comments-dao.js"

const createComment = async (req, res) => {
    const newComment = req.body
    newComment.likes = 0
    newComment.dislikes = 0
    newComment.replies = 0
    newComment.liked = false
    newComment.disliked = false
    const insertedComment = await commentDao
        .createComment(newComment)
    res.json(insertedComment)
}

const findComments  = async (req, res) => {
    const comments = await commentDao.findComments()
    res.json(comments)
}

const updateComment = async (req, res) => {
    const cid = req.params.cid
    const updates = req.body;
    const status = await commentDao
        .updateComment(cid, updates)
    res.json(status);
}

const deleteComment = async (req, res) => {
    const cid = req.params.cid
    const status = await commentDao
        .deleteComment(cid)
    res.json(status)
}

export default (app) => {
    app.post('/api/comments', createComment);
    app.get('/api/comments', findComments);
    app.put('/api/comments/:cid', updateComment);
    app.delete('/api/comments/:cid', deleteComment);
}