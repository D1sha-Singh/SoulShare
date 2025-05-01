const express = require('express')
const journalRouter =  express.Router()
const Journal = require('../models/journal')
const { verifyToken } = require('../middlewares/verifyToken')

journalRouter.get("/journals/:id", async (req, res) => {
    try {
        const jrnlId = req.params.id;
        const jrnls = await Journal.findById(jrnlId);
        if (!jrnls) return res.status(404).send("Journal not found");
        res.send(jrnls)
    } catch (err) {
        res.status(400).send("Something went wrong!!")
    }
})

journalRouter.get("/journals", async (req, res) => {
    try {
        console.log("reaching here");
        
        const jrnls = await Journal.find({});
        res.send(jrnls)
    } catch (err) {
        res.status(400).send("Something went wrong!!")
    }
})

journalRouter.post("/journals", verifyToken, async (req, res) => {
    try {
        const { mood, content, userId } = req.body;
        const jrnl = new Journal({
            userId: userId,
            mood: mood,
            content: content
        });
        await jrnl.save();
        res.send("this is a /trial journals call")
    } catch (err) {
        console.log(err);
    }
})

module.exports = journalRouter