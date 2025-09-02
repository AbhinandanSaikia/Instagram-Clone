import mongoose from 'mongoose';
const commentSchama = new mongoose.Schema({
    text: { type: String, require: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', require: true },
}); 
export default commentSchama = mongoose.model('Comment', commentSchama);