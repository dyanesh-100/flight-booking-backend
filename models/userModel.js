const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId : {
        type: String,
        required : true
    },
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
            sestNo : Number,
            bookingTime : ISODate
        }
    ]
},
    {
        collection : 'users'
    }
)

module.exports = mongoose.models('users',userSchema)