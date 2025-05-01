const mongoose = require('mongoose');

const chatSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
  endedAt: {
    type: Date,
  },
  topic: {
    type: String, // optional: "anxiety", "motivation", etc.
  }
});

module.exports = mongoose.model('ChatSession', chatSessionSchema);
