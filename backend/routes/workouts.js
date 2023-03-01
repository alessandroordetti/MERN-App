const express = require('express');
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const router = express.Router();

/* GET all workouts */
router.get('/', getWorkouts)

//GET a single record
router.get('/:id', getWorkout)

//POST a new record
router.post('/', createWorkout)

//UPDATE
router.patch('/:id', updateWorkout)

//DELETE
router.delete('/:id', deleteWorkout)

module.exports = router;