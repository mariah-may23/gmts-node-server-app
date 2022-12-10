import mongoose from 'mongoose';
const Commentschema = mongoose.Schema({
                                       comment: String,
                                       likes: Number,
                                       liked: Boolean,
                                       dislikes: Number,
                                       disliked: Boolean,
                                   }, {collection: 'comments'});
export default Commentschema;