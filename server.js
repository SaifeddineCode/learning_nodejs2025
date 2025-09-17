import http from 'http'; 
const PORT = process.env.PORT

const server = http.createServer((req,res)=>{
    // res.setHeader("Content-type","text/plain")
    // res.statusCode = 404
    res.writeHead(500,{"Content-type":"text/html"})
    res.end('<h1>Hello world</h1>')
})


server.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)

})