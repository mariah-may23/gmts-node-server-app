import commentsModel from './comments-model.js';
export const findComments = () => commentsModel.find();
export const createComment = (comment) => commentsModel.create(comment);
export const deleteComment = (cid) => commentsModel.deleteOne({_id: cid});
export const updateComment = (cid, comment) => commentsModel.updateOne({_id: cid}, {$set: comment});