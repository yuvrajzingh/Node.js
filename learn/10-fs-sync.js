const {readFileSync, writeFileSync} = require('fs')  //destructuring out of the fs module
const first = readFileSync('./content/first.txt', 'utf8') 
const second = readFileSync('./content/second.txt', 'utf8') 

console.log(first, second);

writeFileSync(  //overwrite any content the file already has. If there is no file it'll create one.
'./content/result-sync.txt', 
`Here is the result : ${first}, ${second}`
)

// to not overwrite the prev values 
writeFileSync( 
'./content/result-sync.txt', 
`Here is the result : ${first}, ${second}`,
{flag: 'a'} // option to not overwrite
)