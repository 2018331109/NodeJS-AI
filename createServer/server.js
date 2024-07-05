const http=require('http')
const port=3000
const hostName='127.0.0.1'

const myServer=http.createServer((req, res)=>{
    res.end("Hello this is your first server")
})
myServer.listen(port, ()=>{
    console.log(`Your server is running at http://${hostName}:${port}`)
})