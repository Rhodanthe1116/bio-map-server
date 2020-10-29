
const mongoose = require('mongoose');


const treeSchema = new mongoose.Schema({
    name: String,
    species: {
        type: mongoose.Schema.Types.String,
        ref: "Species"
    },
})

const Tree = mongoose.model('Tree', treeSchema);

module.exports = Tree;