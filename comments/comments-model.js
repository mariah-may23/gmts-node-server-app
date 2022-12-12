import mongoose from 'mongoose';
import Commentschema from './comments-schema.js'

const commentsModel = mongoose.model('CommentsModel', Commentschema)
export default commentsModel;