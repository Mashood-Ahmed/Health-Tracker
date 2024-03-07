const mongoose = require('mongoose');

const Vitals = mongoose.model('Vitals', new mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    os: {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 6
    },
    hr: {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 6,
    },
    sbp: {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 6,
    },
    bt: {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 6,
    },
    rr: {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 6,
    },
    w8: {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 6,
    }
}));

module.exports = Vitals;