const https = require("https");
const Stream = require("stream").Transform;
const fs = require("fs");
const { json } = require("express");
// const file = fs.createWriteStream('./big.json');


let url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/los%20angeles?key=QD7EHC4LQ3SCJCF9L99PMYPBA&contentType=json";
var jsonContent;
https
    .get(url, (res) => {
        // console.log('statusCode:', res.statusCode);
        // console.log('headers:', res.headers);
        let body = "";

        res.on("data", (chunk) => {
            body += chunk;
        });

        res.on("end", () => {
            let jsonObj = JSON.parse(body)
            jsonContent = JSON.stringify(jsonObj);

            fs.writeFileSync("output.json", jsonContent, 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }

                console.log("JSON file has been saved.");
                return;
            });



        });
    })
    .on("error", (error) => {
        console.error(error.message);
    });



