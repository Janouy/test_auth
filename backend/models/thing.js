const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    title: { type: String, requires: true},
    description: { type: String, requires: true},
    imageUrl: { type: String, requires: true},
    userId: { type: String, requires: true},
    price: { type: String, requires: true}

});

module.exports = mongoose.model('Thing', thingSchema );