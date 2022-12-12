import mongoose from 'mongoose';
const Commentschema = mongoose.Schema({
   comment: String,
   uid: Number
}, {collection: 'comments'});
export default Commentschema;