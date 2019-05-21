const mongoose = require('mongoose');
let User = mongoose.model('User', {

    username: {
        type: String,
        unique: true,
        required: true
    },
    department: {
        type: Array,
        required: true
    },
    pswd: {
        type: String,
        required: true
    },
    rmb: Boolean,

    token: {
        type: String,
    }
});

module.exports = User;