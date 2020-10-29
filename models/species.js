const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Species = mongoose.model(
    "Species",
    new mongoose.Schema({
        _id: String,
        name: String,
        scientificName: String,
        form: Object,
        stem: Object,
        leaf: Object,
        flower: Object,
        fruit: Object,
        usage: String,
        others: String,
        trees: [{ type: Schema.Types.ObjectId, ref: 'Tree' }],
    })
);

module.exports = Species;