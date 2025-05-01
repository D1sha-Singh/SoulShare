const express = require('express')
const aiRouter = express.Router()

const ai = require('../models/aiReflection')

aiRouter.post('/ai/reflect', (res, req) => {
    
})

module.exports = aiRouter
