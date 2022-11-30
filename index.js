const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())

app.get('/hello', (req,res)=>{
    res.send('hello from express')
})

app.listen(4000, () => {
    console.log(`app is listening on port 4000`)
})