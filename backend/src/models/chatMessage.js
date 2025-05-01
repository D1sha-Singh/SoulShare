const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatSession',
    required: true,
  },
  sender: {
    type: String, // 'user' or 'ai'
    enum: ['user', 'ai'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
