const { fetchingData, geoloc } = require('../utils/tools')
const { StatusCodes } = require('http-status-codes')


const currentLocForcast = async (req, res) => {
    const info =  geoloc()
    const {latitude, longitude, city } = await info
    console.log(latitude, longitude, city)
    req.query = {
        latitude: latitude,
        longitude: longitude,
        address: city,
    }
    const weather = await fetchingData(req.query)
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