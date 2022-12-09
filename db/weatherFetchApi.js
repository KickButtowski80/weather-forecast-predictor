const got = require('got');

(async () => {
    try {
        let url =
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/los%20angeles?unitGroup=metric&elements=datetime%2Caddress&include=current%2Cfcst&key=QD7EHC4LQ3SCJCF9L99PMYPBA&options=nonulls&contentType=json"
        const response = await got(url, { json: true });
        console.log(response.body);
        console.log(response.body);
    } catch (error) {
        console.log(error.response.body);
    }
})();
