import mongoose from 'mongoose';
const likeSchema = mongoose.Schema({
  item_id: String,
  uid: Number
}, {collection: 'likes'});
export default likeSchema;