var express = require('express');
var router = express.Router();

const Tree = require('../models/tree');

/* GET trees listing. */
router.get('/', async (req, res, next) => {
    console.log('finding trees...')
    try {

        const trees = await Tree.find().populate('species');
        // console.log(trees);
        res.send(trees);
    } catch (err) {
        console.log(err);
    }

});

// /* GET trees listing. */
// router.get('/', (req, res, next) => {
//     // const trees = await Tree.find((err, trees) => {
//     //     if (err) {
//     //         return console.error(err);
//     //     }
//     // }).populate('species');
//     console.log('finding trees...')

//     Tree.
//         find().
//         populate('species').
//         exec(function (err, trees) {
//             if (err) return (err);
//             console.log('The species is %s', trees);
//             // prints "The author is Ian Fleming"
//             res.send(trees);
//         });
// });

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
