const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    //[key]:[tipo]
    url: String,
    name: String,
    type: String,
    language: String,
    genres: Array,
    status: String,
    runtime: Number,
    premiered: String,
    officialSite: String,
    schedule: Object,
    rating: Object,
    weight: Number,
    network: Object,
    webChannel: String,
    externals: Object,
    image: Object,
    summary: String,
    updated: Number,
    _links: Object
})

const ShowModel = mongoose.model('seriesApiResponses', showSchema);

module.exports = ShowModel;