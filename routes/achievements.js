var express = require('express');
var router = express.Router();

const Achievement = require('../models/achievement');
const Question = require('../models/question');

router.get('/', async (req, res, next) => {
   
       console.log('finding achievements...');
    try {

        const achievements = await Achievement.find().populate('questions');
        // console.log(trees);
        res.send(achievements);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
