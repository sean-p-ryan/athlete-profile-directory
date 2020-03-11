const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    name: {type:String, trim:true, default: ' '},
    sport: {type:String, trim:true, default: ' '},
    nationality: {type:String, trim:true, default: ' '},
    gender: {type:String, trim:true, default: ' '},
    dateOfBirth: {type:String, trim:true, default: ' '}
})

module.exports = mongoose.model('Profile', Profile)