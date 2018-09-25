const express = require('express')
const router = express()
const SiblingsController = require('../../controllers/siblings')

router.route('/:number').get(SiblingsController.getLargestNumber)

module.exports = router