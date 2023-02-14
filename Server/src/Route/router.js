const express = require('express')
const router = express.Router()
const {creatTask}=require("../controllers/taskController")


router.post("/create",creatTask)





//errorHandling for wrong address
router.all("/**", function (req, res) {         
    res.status(400).send({
        status: false,
        msg: "The api you request is not available"
    })
})
module.exports=router