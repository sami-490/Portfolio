const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({},
{ timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);