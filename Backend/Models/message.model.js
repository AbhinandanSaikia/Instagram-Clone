import mongoose  from 'mongoose';
const messageSchema = new mongoose.Schema({
    senderID: { type: mongoose.Schema.Types.ObjectId, ref: 'User',},
    reciverID: { type: mongoose.Schema.Types.ObjectId, ref: 'User',},
    Message: { type: String, require: true },

});
export default Message = mongoose.model('Message', messageSchema);