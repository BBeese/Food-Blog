import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import Meal from './models/Meal'


// {
// 	"restaurant" : "North Italia",
//     "quality" : "8 / 10",
//     "value" : "7/ 10",
//     "health" : "7/ 10",
//     "image_url" : "north_italia0.jpg"
// }

const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/meals')

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connection established!')
})

// Get all meals
router.route('/meals').get((req, res) => {
    Meal.find((err, meals) => {
        if (err)
            console.log(err)
        else 
            res.json(meals)
    })
})

// Get most recent meal
router.route('/home').get((req, res) => {
    Meal.find((err, meal) => {
        if (err)
            console.log(err)
        else 
            res.json(meal)
    }).limit(1)
})

// Get meal by ID
router.route('/meals/:id').get((req, res) => {
    Meal.findById(req.params.id, (err, meal) => {
        if (err)
            console.log(err)
        else
            res.json(meal)
    })
})

// Post new meal 
router.route('/meals/add').post((req, res) => {
    let meal = new Meal(req.body)
    meal.save()
        .then(meal => {
            res.status(200).json({'meal': 'Added successfully'})
        })
        .catch(err => {
            res.status(400).send('Failed to create new meal')
        })
})

// Update existing meal
router.route('/meals/update/:id').post((req, res) => {
    Meal.findById(req.params.id, (err, meal) => {
        if (!meal)
            return next(new Error('Could not load Document'))
        else {
            meal.restaurant = req.body.restaurant
            meal.review = req.body.review
            meal.quality = req.body.quality
            meal.value = req.body.value
            meal.health = req.body.health
            meal.image_url = req.body.image_url

            meal.save().then(meal => {
                res.json('Update done')
            }).catch(err => {
                res.status(400).send('Update failed')
            });
        }
    });
});

// Delete meal
router.route('/meals/delete/:id').get((req, res) => {
    Meal.findByIdAndRemove({_id: req.params.id}, (err, meal) => {
        if (err)
            res.json(err)
        else 
            res.json('Removed Successfully')
    })
})

app.use('/', router)
app.listen(4000, () => console.log('Express server running on port 4000'))