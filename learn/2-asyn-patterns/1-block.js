
const {readFile, writeFile} = require('fs')

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, result)=>{
            if(err){
                reject(err)
                return 
            }else{
                resolve(result);
            }            
        })
    })
}

getText('./content/first.txt')
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));