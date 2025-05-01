const mongoose = require('mongoose')

const connectDb = async () => {
    await mongoose.connect(
        "mongodb+srv://d1sha:v8a4hV0XfBTaLU16@soulshare.j2wue6a.mongodb.net/27017"
    )
}

module.exports = connectDb