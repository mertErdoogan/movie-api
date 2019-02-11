const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true, '`{PATH}` is required.'],
        maxlength: [15, '`{PATH}` block (`{VALUE}`), ({MAXLENGTH}) not more character'],
        minlenght: 1,
    },
    category: {
        type: String,
        maxlength: 30,
        minlength: 1,
    },
    country: {
        type: String,
        maxlength: 30,
        minlength: 4,
    },
    year: {
        type: Number,
        max: 2040,
        min: 1900
    },
    imdb_scrore: {
        type: Number,
        max: 10,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    director_id: Schema.Types.ObjectId
});

module.exports = mongoose.model('movie', MovieSchema);