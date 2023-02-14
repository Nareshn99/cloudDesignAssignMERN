const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique: true
    },
    Description: {
        type: String,
        required: true
    },
    Status: {
        enum: ["Open", "In-Progress", "Completed"]
    }
}, { timestamps: true })

module.exports = mongoose.model("task", taskSchema)