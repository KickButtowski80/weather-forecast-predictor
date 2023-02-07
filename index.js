const express = require('express')
const cors = require('cors')
const app = express();
 
app.use(express.json())
app.use(cors())


const forcastRouter = require('./routes/forcasts')

 app.use('/api/v1/forcast', forcastRouter)



app.listen(3000, () => {
    console.log(`app is listening 📻 on port 3000... 🚀`)
})