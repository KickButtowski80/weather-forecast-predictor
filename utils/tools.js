const fetchWeather = require('../db/CallExternalApiUsingHttp')
const axios = require("axios");

const todayDate = () => {
    const d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + "-" + d.getDate()

}


const validParams = (paramsQ) => {
    let { loc, unitGroup } = paramsQ
    loc = (loc !== 'undefined' && loc) || 'los angeles'
    unitGroup = (unitGroup !== 'undefined' && unitGroup) || 'us'
    paramsQ = { ...{ loc, unitGroup } }
    return paramsQ
}

const fetchingData = async ({ latitude, longitude, address, unitGroup }) => {
    console.log(`fetching ${address} in ${unitGroup} ${latitude}---${longitude}`);
    const weather = (async () => {
        const res = await new Promise((resolve, reject) => {
            fetchWeather.callApi({latitude, longitude, address, unitGroup }, (resp) => {
                resolve(resp)
            })
        })
        return JSON.parse(res)
    })()

    const weatherResult = await weather
    return weatherResult

}

const geoloc = async () => {
    const options = {
        method: 'GET',
        url: "http://ipwho.is/"
    };
    const response = await axios.request(options)
    return response.data

}

module.exports = {
    validParams,
    fetchingData,
    todayDate,
    geoloc
}