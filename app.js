const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express');
const mongoose = require('mongoose');

const app = express() // initialize app

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mongo-proj', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
	console.log('Mongoose is connected!')
})

// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/public', express.static(__dirname + '/public'));
app.use('/api', api) // API Routes


module.exports = app