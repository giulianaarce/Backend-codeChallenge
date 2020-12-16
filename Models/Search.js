const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    //[key]:[tipo]
    fecha:String,
    textoBusqueda:String,
    ip:String
})

const SearchModel = mongoose.model('requestLogs', searchSchema);

module.exports = SearchModel;