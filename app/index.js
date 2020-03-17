const express = require('express')
const passport = require('passport')
const session = require('express-session')

const app = express()
const port = 3001

app.get('/', (request, response) => {
    console.log(request.url)
    response.send("Express server running, Wuhuu, Get request btw")
})


app.listen(port, (err) => {
    if (err) {
        return console.log("error happened", err)
    }

    console.log(`server listening on port: ${port}`)
})
