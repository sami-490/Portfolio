const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({},
{ timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);