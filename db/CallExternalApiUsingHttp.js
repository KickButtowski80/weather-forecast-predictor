const https = require("https");

const result = (q, callback) => {
    let { loc, unitGroup } = q
    let url =
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${unitGroup}&key=QD7EHC4LQ3SCJCF9L99PMYPBA&contentType=json`
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
        return callback({ err: err.message })
    })
}

module.exports.callApi = result
