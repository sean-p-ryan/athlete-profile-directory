// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const Profile = require('../models/Profile')

router.get('/profiles', (req, res) => {
	Profile.find()
	.then(profiles => {
		res.json({			
			profiles
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
	Profile.create(req.body)
	.then(profile => {
		res.json({
			confirmation: 'success',
			data: profile
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err
		})
	})
})

module.exports = router