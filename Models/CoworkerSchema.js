const mongoose = require('mongoose');

const CoworkerSchema = new mongoose.Schema({
  name: {type: String}, 
  country: {type: String},
  city: {type: String},
  text: {type: String},
  imagePortraitUrl: {type: String},
});

const Coworker = new mongoose.model('Coworker', CoworkerSchema);
module.exports = Coworker;