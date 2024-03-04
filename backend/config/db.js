const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socket')
    .then(() => {
        console.log('Db Connected Successfully')
    })