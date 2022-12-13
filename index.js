const express = require('express')
const cors = require('cors')
const fetchWeather = require('./db/CallExternalApiUsingHttp')
const app = express();
const { validParams, fetchingData } = require('./utils/tools')
app.use(express.json())
app.use(cors())



app.get('/', async (req, res) => {
    const queryParams = validParams(req.query)
    const weather = await fetchingData(queryParams)
    const weatherResult = await weather;
    res.send(weatherResult)
    return
})

app.get('/today-forcast', async (req, res) => {
    const queryParams = validParams(req.query)
    const weather = await fetchingData(queryParams)
    const weatherResult = await weather;
    res.send(weatherResult.days[1])
    return

})

app.listen(4000, () => {
    console.log(`app is listening on port 4000`)
})