const https = require("https");

const result = (q, callback) => {
    let { latitude, longitude,  address, unitGroup } = q
    const addressOrCordinate =(address || 'los angeles')  || (latitude  + "," + longitude)
    // const next<value>days
    let ug = unitGroup || 'us'
    let url =
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${addressOrCordinate}/next5days?unitGroup=${ug}&key=QD7EHC4LQ3SCJCF9L99PMYPBA&include=days&contentType=json`


    https.get(url, (req) => {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk
        })

        req.on('end', () => {
            if (400 <= req.statusCode && req.statusCode <= 500)
                return callback(JSON.stringify({ err: data, status: req.statusCode }))
            return callback(data)
        })
        console.info(`${url}`)
    }).on('error', (err) => {
        console.log("Error:", err.message)
    })
}

module.exports.callApi = result
