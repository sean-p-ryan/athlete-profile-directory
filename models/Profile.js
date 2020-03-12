const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    name: {type:String, trim:true, default: ' '},
    sport: {type:String, trim:true, default: ' '},
    nationality: {type:String, trim:true, default: ' '},
    gender: {type:String, trim:true, default: ' '},
    dateOfBirth: {type:String, trim:true, default: ' '},
    description: {type:String, trim:true, default: ' '},
    location: {type:String, trim:true, default: ' '},
    team: {type:String, trim:true, default: ' '},
    twitter: {type:String, trim:true, default: ' '},
    facebook: {type:String, trim:true, default: ' '},
    instagram: {type:String, trim:true, default: ' '}
})

module.exports = mongoose.model('Profile', Profile)