const express = require('express');
const connectDb = require("./config/database")
require('dotenv').config();

console.log(process.env.BASE_URL);
const userRouter = require("./routes/user");
const journalRouter = require('./routes/journals');

const app = express()

app.use(express.json()) // to convert req.body to json

app.use(process.env.BASE_URL + "", userRouter);
app.use(process.env.BASE_URL+ "", journalRouter);

connectDb().then(() => {
    console.log("db connection established")
    app.listen(process.env.PORT, () => console.log("listening...")) // starting server only after successful database connection 
}).catch((err) => {
    console.log("db connection cannot be established.")
})

 