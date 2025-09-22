// File system module : 
// The File System (fs) module in Node.js lets you work with files on your computer. 
// You can use it to create, read, write, update, delete, and rename files or folders.


// utf-8 :
// UTF-8 converts that text into binary (0s and 1s) so the computer can store and process it.
// When needed, it converts the binary back into human-readable text.


import fs from 'fs/promises'




fs.readFile("./test.txt",'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})


// readile sync 

const data = fs.readFileSync("./test.txt","utf-8")
console.log(data)


// writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
    console.log('File written to...');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
