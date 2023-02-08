const CustomAPIError = require('./custom-api')
const NotFoundError = require('./not-found')
const BadRequestError = require('./bad-request')

module.exports = {
    BadRequestError,
    CustomAPIError,
    NotFoundError
}