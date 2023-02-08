const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE,
        msg: err.message || '😨Something went wrong. 👍 please try again'
    }
 
    return res.status(customError.statusCode).json({msg: customError.msg})
}
module.exports = errorHandlerMiddleware