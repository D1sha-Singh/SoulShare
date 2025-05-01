const mongoose = require('mongoose');

const aiReflectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  journalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Journal',
    required: true,
  },
  generatedAt: {
    type: Date,
    default: Date.now,
  },
  mood: {
    type: String, // optional: "happy", "sad", "anxious", etc.
  },
  insight: {
    type: String, // AI-generated insight or reflection
    required: true,
  },
  sentimentScore: {
    type: Number, // optional: e.g., -1 (negative) to +1 (positive)
  },
  tags: {
    type: [String], // optional: ["growth", "grief", "success"]
  }
});

module.exports = mongoose.model('AIReflection', aiReflectionSchema);
