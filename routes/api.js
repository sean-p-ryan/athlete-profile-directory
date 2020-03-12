// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const Profile = require('../models/Profile')

router.get('/profile', (req, res) => {
	let filters = req.query;	
	if (req.query.age != null){
		filters = {
			age: {$gt: req.query.age}
		}
	}

	Profile.find(filters)
	.then(profiles => {
		res.json({
			confirmation: 'success',
			data: profiles
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.post('/profile', (req, res) => {
	console.log('in router.post')
	Profile.create(req.body)
	.then(profile => {
		console.log('in success block ' + profile)
		res.json({
			confirmation: 'success',
			data: profile
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router