const mongoose = require('mongoose');

const Schema = mongoose.Schema

/* These props are required to each workout doc */
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema);
