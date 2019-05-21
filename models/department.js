const mongoose = require('mongoose');
let Department = mongoose.model('Department', {

    depName: {
        type: String,
        require: true,
        unique: true
    },
    permissions: Array, 
});

module.exports = Department;