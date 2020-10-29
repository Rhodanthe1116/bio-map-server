var express = require('express');
var router = express.Router();

const Species = require('../models/species');
const Tree = require('../models/tree');

/* GET trees listing. */
router.get('/', async (req, res, next) => {
    const speices = await Species.find((err, speices) => {
        if (err) {
            return console.error(err);
        }
    })

    res.send(speices);
});

router.post('/', async (req, res, next) => {
    const newTree = req.body;
    console.log('received a new tree: ', newTree);
    const myTree = new Tree({
        name: newTree.name,
    });

    myTree.save((err, tree) => {
        if (err) {
            return console.error(err);
        }
        console.log("a tree saved: ", tree);
    })


    res.send(myTree);
});

module.exports = router;
