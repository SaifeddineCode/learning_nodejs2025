function generateRandomNumber () {
    return Math.floor(Math.random() * 100)
}



module.exports = generateRandomNumber;

// module.exports = {
//     export1,
//     export2,
//     .
//     .
//     .
// };
// module.exports is how you share code between different files in Node.js.