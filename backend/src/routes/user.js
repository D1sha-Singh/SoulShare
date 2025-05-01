const express = require("express");
const userRouter = express.Router();
// const { userAuth } = require("../middlewares/auth");
// const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");

userRouter.post("/users/init", async (req, res) => {

    try {
        // console.log(req);
        const { deviceId, preferences: { allowMatching } } = req.body
        const user = new User({
            deviceId,
            preferences: {
                allowMatching: allowMatching
            }
        })

        const savedUser = await user.save();
        const token =  await savedUser.getJWT();
      
        res.json({ message: "User Added successfully!", data: savedUser, token });

    } catch(err) {
        res.status(400).send("ERROR : " + err.message)
    }
  
});

module.exports = userRouter;
