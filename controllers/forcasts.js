const { fetchingData, geoloc } = require('../utils/tools')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const currentLocForcast = async (req, res, next) => {
    const info = geoloc()
    const { latitude, longitude, city } = await info
    req.query = {
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

const specificLocForcast = async (req, res, next) => {

    const weather = await fetchingData(req.query)
    console.log(req.query)
    if (weather.status === 401) {
         throw new BadRequestError('😟...exceed your daily retreving weather info')
    }
    const weatherInfo = await weather;
    const { address, days } = weatherInfo
    if (address === undefined) {
        weather.err = '🚑...address cannot be empty'
        next(new BadRequestError(weather.err))
        return
    }
    res.status(StatusCodes.OK).json({
        place: address,
        todayInfo: days
    })
}

module.exports = {
    currentLocForcast,
    specificLocForcast
}