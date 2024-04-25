const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('About')
    }
    res.end(`<h1>We don't have that page.</h1><a href='/'>back home</a>`)
})

server.listen(5000, ()=>{
    console.log('Server listening on port 5000')
})