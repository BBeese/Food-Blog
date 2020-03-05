import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Meal = new Schema ({
    restaurant: {
        type: String
    },
    review: {
        type: String
    },
    quality: {
        type: String
    },
    value: {
        type: String
    },
    health: {
        type: String
    },
    image_url: {
        type: String
    }
})

export default mongoose.model('Meal', Meal)