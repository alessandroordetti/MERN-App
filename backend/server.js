require('dotenv').config()

const express = require('express'); 
const mongoose = require('mongoose'); 
const workoutRoutes = require('./routes/workouts')

//express app sarà storata in questa variabile
const app = express();

//middleware
app.use(express.json())

//next da invocare per andare avanti nel codice
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// handling routes
app.use('/api/workouts',workoutRoutes); //when i call this endpoint i call this workoutRoutes

//connect to db on MONGO DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests only after connecting to db!!!
        app.listen(process.env.PORT, () => {
            console.log('app listening to port 4000!', process.env.PORT);
        })
    })
    .catch((err) =>{
        console.log(err);
    })

