const flightModel = require('../models/flightModel')
const userModel = require ('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_TOKEN = "retfgynherdtcfvgybhunjwdSEFVGYBHNJftvgbhjnmkDRTFGYdfghghj"


const signup = async (request,response) => {
    const userData = request.body
    try{
        const existingUser = await userModel.findOne({email : userData.email})
        if(existingUser){
            return response.status(401).send({meesage :"user already exist"})
        }
        const hashedPassword = await bcrypt.hash(userData.password,10)
        const newUser =new userModel({
            email : userData.email,
            userName : userData.userName,
            password : hashedPassword
        })
        const addedUser = await newUser.save()
        return response.status(201).send(addedUser)
    }
    catch(error){
        response.status(500).send({message: error.message})
    }
}
const login = async (request,response) => {
    const userData = request.body
    try{
        const validUser = await userModel.findOne({email: userData.email})
        if(!validUser){
            return response.status(404).send({message: "User not registered"})
        }
        if(await bcrypt.compare(userData.password ,validUser.password)){
            const AUTH_TOKEN = jwt.sign({email: validUser.email}, JWT_TOKEN)
            return response.status(200).send({token: AUTH_TOKEN})

        }
    }
    catch(error){
        response.status(500).send({message: error.message})
    }
}


const getAllFlights =async (request , response) => {
    try{
        const flightData = await flightModel.find()
    }
    catch(error){

    }
}

module.exports = {signup,login}