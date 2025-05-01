const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  content: { type: String, required: true },
  mood: { type: String, required: true }, // e.g., "sad", "happy", etc.
  timestamp: { type: Date, default: Date.now },
  emotionScores: {
    sadness: Number,
    joy: Number,
    anger: Number,
    fear: Number,
    love: Number,
  },
  aiReflectionId: { type: mongoose.Schema.Types.ObjectId, ref: "AIReflection" },
  matched: { type: Boolean, default: false },
});

module.exports = mongoose.model("Journal", journalSchema);
