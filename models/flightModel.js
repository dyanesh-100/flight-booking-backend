const mongoose = require('mongoose')

const flightSchema =new mongoose.Schema({
    flightName:{
        type: String,
        required : true
    },
    flightId:{
        type: Number,
        required : true
    },
    seatCapacity:{
        type : Number,
        default : 60
    },
    
    arrivalTime:{
        type : Date
             
    },
    departureTime:{
        type : Date
    },
    
    departureAirport : {
        type : String,
        required : true
    },
    arrivalAirport : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }

},
    {
        collection : 'flights'
    }
)

module.exports = mongoose.model('flights',flightSchema)