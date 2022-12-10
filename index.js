const express = require('express')
const cors = require('cors')
const fetchWeather = require('./db/CallExternalApiUsingHttp')
const app = express();

// app.use(express.json())
// app.use(cors())

// app.get('/hello', (req, res) => {
//     res.send('hello from express')
// })

app.get('/', async (req, res) => {
    console.error(req.query)
    const queryParams = req.query
    const weather = (async () => {
        const res = await new Promise((resolve) => {
            fetchWeather.callApi(queryParams,( resp) => {
                resolve(resp)
            })
        })
        return JSON.parse(res)
    })()

    const weatherResult = await weather
    res.send(weatherResult)
    return
})

app.listen(4000, () => {
    console.log(`app is listening on port 4000`)
})