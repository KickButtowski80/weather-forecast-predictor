// import fetch from 'node-fetch';
// import { writeFileSync } from "fs";
// const fetch = require('node-fetch')
const { writeFileSync } = require('fs')
// https://stackoverflow.com/questions/69041454/error-require-of-es-modules-is-not-supported-when-importing-node-fetch
let url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/los%20angeles?key=QD7EHC4LQ3SCJCF9L99PMYPBA";
let text = ''
fetch(url)
    .then(res => {
        text = res.text()
        res.text()
    })
    .then(text => console.log(text))

// const response = await fetch(url)

// const resultText = await JSON.parse(response)
// const resultText = await response.text()



writeFileSync("output.json", JSON.stringify(text), function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
    return;
});