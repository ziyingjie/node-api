

const fs = require('fs')
const promisify = require('util').promisify
const read = promisify(fs.readFile)


read('./promisify.js').then(data => {
    console.log(data.toString());

}).catch(err => {
    console.log(err);

})

async function test() {
    try {
        const txt = await read('./promisify.js')
        console.log(txt.toString());
    } catch (err) {
        console.log(err)
    }
}
test()