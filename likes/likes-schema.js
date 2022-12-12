import mongoose from 'mongoose';
const likeSchema = mongoose.Schema({
  item_id: Number,
  uid: Number
}, {collection: 'likes'});
export default likeSchema;