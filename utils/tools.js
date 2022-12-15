const fetchWeather = require('../db/CallExternalApiUsingHttp')

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

const fetchingData = async ({ loc = 'los angeles', unitGroup = 'us' }) => {
    console.log(`fetching ${loc} in ${unitGroup}`);
    const weather = (async () => {
        const res = await new Promise((resolve, reject) => {
            fetchWeather.callApi({ loc, unitGroup }, (resp) => {
                resolve(resp)
            })
        })
        return JSON.parse(res)
    })()

    const weatherResult = await weather
    return weatherResult

}


module.exports = {
    validParams,
    fetchingData,
    todayDate
}