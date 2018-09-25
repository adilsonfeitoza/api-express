const express = require('express')
const router = express()
const LogsController = require('../../controllers/logs')
const { check } = require('express-validator/check')

const postAttributesValidation = [
    check('sourceUrl').exists().withMessage('sourceUrl is required').not().isEmpty().withMessage("The sourceUrl cannot be empty"),
    check('targetPath').exists().withMessage('targetPath is required').not().isEmpty().withMessage("The targetPath cannot be empty")
]

router.post('/', postAttributesValidation, LogsController.parseLogs.bind(LogsController))

module.exports = router