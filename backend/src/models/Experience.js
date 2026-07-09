const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({},
{ timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);