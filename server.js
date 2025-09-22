import http from 'http'; 
import fs from 'fs/promises'
import url, { fileURLToPathBuffer } from 'url'
import path from 'path'
const PORT = process.env.PORT

// GET current path : 
// fs + __dirname = grab HTML files (since we can't import them)
const __filename = url.fileURLToPath(import.meta.url) // Full path to THIS current file
const __dirname = path.dirname(__filename) // Full path to the folder containing this file 

console.log("filename :",__filename,"dirname :",__dirname)


const server = http.createServer( async (req,res)=>{

    try {
        if(req.method === 'GET'){
            let filePath; 
            if(req.url === '/'){
                filePath = path.join(__dirname,'public','index.html')
            }else if (req.url === '/about'){
                filePath = path.join(__dirname,'public','about.html')
            }else {
                throw new Error("Not found")
            }
            const data = await fs.readFile(filePath) 
            res.setHeader('Content-Type','text/html')
            res.write(data)
            res.end()

        }else {
            throw new Error("Method is not allowed")
        }

    } catch (error) {
        res.writeHead(500,{"Content-type":"text/plain"})
        res.end('SERVER ERROR')
    }

 
})


server.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)

})