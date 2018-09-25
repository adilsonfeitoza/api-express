const status = require('http-status')

class SiblingsController {

    static async getLargestNumber(req, res) {
        
        let number = req.params.number.toString().split('')

        let new_number = number.sort((num1, num2) => num2 - num1).join('')

        return res.status(status.OK).send(new_number)
    }
}

module.exports = SiblingsController