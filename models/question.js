
const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    category: String,
    species: String,
    englishTitle: String,
    googleTranslate: String,
    title: String,
    options: Object,
    answer: String,
})

const Question = mongoose.model('Question', Schema);

module.exports = Question;