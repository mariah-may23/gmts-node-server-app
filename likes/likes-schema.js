import mongoose from 'mongoose';
const likeSchema = mongoose.Schema({
                                          like: Boolean,
                                          uid: Number
                                      }, {collection: 'likes'});
export default likeSchema;