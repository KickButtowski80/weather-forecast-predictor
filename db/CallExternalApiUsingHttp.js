const https = require("https");
const Stream = require("stream").Transform;
const fs = require("fs");

const result = (callback) => {
    // let url =
    //     "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/los%20angeles?unitGroup=metric&elements=datetime%2Caddress&include=current%2Cfcst&key=QD7EHC4LQ3SCJCF9L99PMYPBA&options=nonulls&contentType=json"
    // let url =
    // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/los%20angeles?unitGroup=metric&include=days&key=QD7EHC4LQ3SCJCF9L99PMYPBA&contentType=json"

    let findLatLon = 
    "https://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=32f3edbcd8adfbd4c34515859d2f6684"

    const lat = findLatLon.lat
    const lon = findLatLon.lon

    // let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=32f3edbcd8adfbd4c34515859d2f6684`

    let url ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/los%20angeles?unitGroup=metric&key=QD7EHC4LQ3SCJCF9L99PMYPBA&contentType=json"
    https.get(url, (req) => {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk
        })

        req.on('end', () => {
            return callback(data)
        })

    }).on('error', (err) => {
        console.log("Error:", err.message)
    })
}

module.exports.callApi = result
