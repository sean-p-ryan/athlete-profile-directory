const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    name: {type:String, trim:true, default: 'None listed'},
    sport: {type:String, trim:true, default: 'None listed'},
    nationality: {type:String, trim:true, default: 'None listed'},
    gender: {type:String, trim:true, default: ' '},
    dateOfBirth: {type:String, trim:true, default: 'None listed'},
    description: {type:String, trim:true, default: 'None listed'},
    location: {type:String, trim:true, default: 'None listed'},
    team: {type:String, trim:true, default: 'None listed'},
    twitter: {type:String, trim:true, default: 'None listed'},
    facebook: {type:String, trim:true, default: 'None listed'},
    instagram: {type:String, trim:true, default: 'None listed'}
})

module.exports = mongoose.model('Profile', Profile)