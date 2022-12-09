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
    const weather = (async () => {
        const res = await new Promise((resolve) => {
            fetchWeather.callApi((resp) => {
                resolve(resp)
            })
        })
        return JSON.parse(res)
    })()

    const weatherResult = await weather
    res.send(weatherResult.days[0].icon)
    return
})

app.listen(4000, () => {
    console.log(`app is listening on port 4000`)
})