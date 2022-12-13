import mongoose from 'mongoose';
const likeSchema = mongoose.Schema({
  item_id: String,
  uid: Number,
 shoeName:String,
 brand:String,
 silhoutte:String,
 styleID:String,
 make:String,
 colorway:String,
 retailPrice:Number,
 thumbnail:String,
 releaseDate:String,
 description:String,
 urlKey:String,
}, {collection: 'likes'});
export default likeSchema;