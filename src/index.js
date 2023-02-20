const express = require('express')

const app = express();

const port = 1337

const routes = require('./routes')

app.use(routes)



app.listen(port , () => {
    console.log(`😜 Server is listening in port: ${port}`)
})