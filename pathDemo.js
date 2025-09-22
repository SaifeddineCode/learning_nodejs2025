import path from 'path'
import url from 'url'

const filePath = "./dir1/dir2/test.txt"

// basename() 
console.log(path.basename(filePath)) // text.txt


// dirname() 
console.log(path.dirname(filePath)) // ./dir1/dir2

// extname()
console.log(path.extname(filePath)) // .txt

// parse()

console.log(path.parse(filePath)) // dir,base,ext and name of the file (all of that as an object)


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log("join :",filePath2);

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log("resolve :",filePath3);