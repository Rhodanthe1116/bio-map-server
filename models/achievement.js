const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Achievement = mongoose.model(
    "Achievement",
    new mongoose.Schema({
        _id: String,
        name: String,
        questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    })
);

module.exports = Achievement;