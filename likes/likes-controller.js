import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {


    const userLikesSneaker = async (req, res) => {

        const newLike = req.body
        const insertedLike = await likesDao.userLikesSneaker(newLike)
        res.json(newLike)
    }

    const userUnlikesSneaker = async (req, res) => {

        const {uid, sid} = req.params
        const status = await likesDao.userUnlikesSneaker(uid, sid)
        res.send(status)
    }

    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }

    const findSneakersLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const sneakers = await likesDao.findSneakersLikedByUser(uid)
        res.json(sneakers)
    }


    app.post('/likes', userLikesSneaker)
    app.delete('/unlikes/:lid', userUnlikesSneaker)
    app.get('/likes', findAllLikes)
    app.get('/likes/:uid', findSneakersLikedByUser)

}

export default LikesController;