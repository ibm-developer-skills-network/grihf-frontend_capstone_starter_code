const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('user', userSchema);
