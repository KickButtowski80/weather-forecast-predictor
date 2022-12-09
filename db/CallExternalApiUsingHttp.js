const https = require("https");
const Stream = require("stream").Transform;
const fs = require("fs");

const result = (q, callback) => {
    console.log('fetching api query is', q)
    let url =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${q}?unitGroup=metric&key=QD7EHC4LQ3SCJCF9L99PMYPBA&contentType=json`
    https.get(url, (req) => {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk
        })

        req.on('end', () => {
            return callback(data)
        })
      console.info(`${url}`)
    }).on('error', (err) => {
        console.log("Error:", err.message)
    })
}

module.exports.callApi = result
