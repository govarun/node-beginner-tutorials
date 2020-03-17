// creating a http server

const http = require('http')

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end("Hello server!")

} 

const server = http.createServer(requestHandler)
const port = 4040

server.listen(port, (err) => {
    if(err) {
        return console.log("Something bad happened , error", err)
    }
    console.log(`server is listening on ${port}`)
})