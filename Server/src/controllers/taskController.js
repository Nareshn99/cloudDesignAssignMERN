const taskModel = require('../models/taskModel');


const creatTask = async (req, res) => {
    try {
        const { Title, Description, Status } = req.body
        const data = await taskModel.create(req.body);
        res.status(201).send({ status: true, message: "Created Successfully", data: data })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}


module.exports={
    creatTask
}