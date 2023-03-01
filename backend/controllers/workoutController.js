const Workout = require('../models/workoutModel');
const mongoose = require('mongoose'); 


// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}) // -1 works for descending order

    res.status(200).json(workouts);
}

// get a single one

const getWorkout = async (req, res) => {
    const {id} = req.params

    //check for id validity
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('No record found!')
    }

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({
            error: 'No record found'
        })
    }

    res.status(200).json(workout);
}

// create a new one

const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete one
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    //check for id validity
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('No record found!')
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({err:'No record found!'})
    }

    res.status(200).json(workout);
}
// update one 

const updateWorkout = async (req, res) => {
    const {id} = req.params

    //check for id validity
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('No record found!')
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(400).json({err:'No record found!'})
    }
}

module.exports = {
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
    createWorkout
}