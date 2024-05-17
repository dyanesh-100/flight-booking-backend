const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    bookedFlights : [
        {
            flightId : Number,
            seatNo : Number,
            bookingTime : Date
        }
    ]
},
    {
        collection : 'users'
    }
)

module.exports = mongoose.model('users',userSchema)