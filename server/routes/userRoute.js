const express = require("express");
const router = express.Router();
const user = require("../models/user");

const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const userExist = await user.findOne({ $or: [ { email: req.body.email }, { phone: req.body.phone } ] });
    if(userExist){
        res.json({
            message: "user Already Exist"
        })
        return;
    }
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    console.log("After replacing",req.body.password);
    await user.create(req.body);
    res.json({
      status: "Done",
      message: "You are successfully Registered"
    });
    return;
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});

router.post("/login", async(req,res)=>{
    try{
        const userExist = await user.findOne({ $or: [ { email: req.body.email }, { phone: req.body.phone } ] });
        if(!userExist){
            res.status(401).json({
                answer:"Details doesn't match",
                isConnected: false
            });
            return
        }
        else{
            let flag = await bcrypt.compare(req.body.password, userExist.password);
            if(flag){
                res.status(200).json({
                    message: "you are a valid user"
                })
            }else{
                res.status(402).json({
                    message: "Password doesn't match",
                })
            }
            return
        }
    }catch(e){
        res.json({
            message: e.message
        })
    }
})
module.exports = router;
