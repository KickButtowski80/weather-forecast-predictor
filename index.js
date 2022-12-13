const express = require('express')
const cors = require('cors')
const app = express();
const { fetchingData } = require('./utils/tools')
app.use(express.json())
app.use(cors())



app.get('/', async (req, res) => {
    const weather = await fetchingData(req.query)
    const weatherResult = await weather;
    res.send(weatherResult)
    return
})


app.get('/today-forcast', async (req, res) => {

    const weather = await fetchingData(req.query)
    const weatherResult = await weather;
    res.send({ place: weatherResult.address , todayInfo: weatherResult.days[0]})
    return

})

app.listen(4000, () => {
    console.log(`app is listening on port 4000`)
})