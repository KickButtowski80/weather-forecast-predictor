const { fetchingData, geoloc } = require('../utils/tools')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const currentLocForcast = async (req, res, next) => {
    const info = geoloc()
    const { latitude, longitude, city } = await info
    console.log(latitude, longitude, city)
    req.query1 = {
        latitude: latitude,
        longitude: longitude,
        address: city,
    }
    const weather = await fetchingData(req.query)
    if (weather.err) {
        weather.err = 'No Weather... ☀️Info...🤷 please check lat and long coordinate 👍'
        next(new NotFoundError(weather.err))

    }
    const weatherInfo = await weather
    res.status(StatusCodes.OK).json({ weatherInfo })
}

const specificLocForcast = async (req, res) => {
    const weather = await fetchingData(req.query)
    const weatherInfo = await weather;
    const { address, days } = weatherInfo
    res.status(StatusCodes.OK).json({
        place: address,
        todayInfo: days[0]
    })
}

module.exports = {
    currentLocForcast,
    specificLocForcast
}