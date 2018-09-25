const httpStatus = require('http-status')
const axios = require('axios')
const { validationResult } = require('express-validator/check')
const myCDN = require('../helpers/cdn')

class LogsController {

    static async parseLogs(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(httpStatus.BAD_REQUEST).json({ errors: errors.mapped() })

        try {
            const { sourceUrl, targetPath } = req.body
 
            const result = await axios.get(sourceUrl) 
            myCDN.formatLogs(result.data, sourceUrl, targetPath)
            
            return res.sendStatus(httpStatus.OK)
        } catch (e) {       
            return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
        }        
    }
}

module.exports = LogsController