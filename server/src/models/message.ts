import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: String,
  text: String,
  added: Date,
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
