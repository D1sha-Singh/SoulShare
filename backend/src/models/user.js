const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../utils/constants')

const userSchema = new mongoose.Schema({
  deviceId: { type: String, required: false, unique: true },
  preferences: {
    allowMatching: { type: Boolean, default: false },
    darkMode: { type: Boolean, default: false },
  },
  createdAt: { type: Date, default: Date.now }
});

userSchema.methods.getJWT = async function () {
  const user = this;

  const token = await jwt.sign({ _id: user._id }, JWT_KEY, {
    expiresIn: "7d",
  });

  return token;
};

module.exports = mongoose.model('User', userSchema);
