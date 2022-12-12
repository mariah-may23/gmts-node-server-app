import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {
    const populate = (
        {
            rawResults, fieldToPopulate,
            sourceData, sourceField
        }) => {
        const populatedResults = rawResults.map((raw) => {
            const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
            return ({
                ...raw,
                [fieldToPopulate]: source
            })
        })
        return populatedResults
    }
    const userLikesSneaker = async (req, res) => {
        const uid = req.session['currentUser']._id
        const sid = req.params.sid
        const newLike = await likesDao.userLikesSneaker(uid, sid)
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

    const findUsersThatLikeSneakers = async (req, res) => {
        const sid = req.params.sid
        const users = await likesDao.findUsersThatLikeSneakers(sid)
        res.json(users)
    }

    app.post('/users/likes/:sid', userLikesSneaker)
    app.delete('/users/unlikes/:sid', userUnlikesSneaker)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findSneakersLikedByUser)
    app.get('/sneakers/:sid/likes', findUsersThatLikeSneakers)
}

export default LikesController;