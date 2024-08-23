// models/GeoData.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LayerSchema = new Schema({
  type : {
    type: String,
    required :true
  },
  layer :{
    type: String,
    required :true
  },
  features:{
    type : Array,
    required :true
  }
});


module.exports = mongoose.model('Layer', LayerSchema);
