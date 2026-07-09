const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({},
{ timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);