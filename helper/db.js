const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie-user:mert5454@ds143614.mlab.com:43614/movie-api82');
    mongoose.connection.on('open', () => {
    console.log({ status: 1 });
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });
};