const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({},
{ timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);