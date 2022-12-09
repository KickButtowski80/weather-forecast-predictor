
var weather = require('weather-js');

const getCityWeather = async () => {

	const result = await weather.find(
		{
			search: 'San Francisco CA',
			degreeType: 'F'
		},
		(err, res) => {
			if (err) {
				console.log(err);
				return err;
			}
			const weatherInfo = JSON.stringify(res, null, 2)
			console.log(weatherInfo);
			return weatherInfo;
		})
		
}


module.exports = {
	getCityWeather,
}