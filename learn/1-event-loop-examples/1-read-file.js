const {readFile} = require('fs')  //readFile is async operation.

console.log('Started firt task')
//CHECK file path !! 
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log(result)
    console.log('Completed first task')
})

console.log("Starting next task")