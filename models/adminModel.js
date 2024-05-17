const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
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
    permissions : [{
        type : String
    }]
        
    
},
    {
        collection : 'admins'
    }
)

module.exports = mongoose.models('admins',adminSchema)