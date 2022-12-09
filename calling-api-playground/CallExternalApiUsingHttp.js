const https = require("https");
const Stream = require("stream").Transform;
const fs = require("fs");
const { json } = require("express");


const result = (callback) => {
    let url =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/los%20angeles?unitGroup=metric&elements=datetime%2Caddress&include=current%2Cfcst&key=QD7EHC4LQ3SCJCF9L99PMYPBA&options=nonulls&contentType=json"

    https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk
        })

        resp.on('end', () => {
            return callback(data)
        })


    }).on('error', (err) => {
        console.log("Error:", err.message)
    })
}

module.exports.callApi = result


result((response) => {
  let jsObj = JSON.parse(response)
  console.log(jsObj.address)
})

