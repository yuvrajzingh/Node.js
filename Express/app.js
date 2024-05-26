const express = require('express');
const path = require('path')
const app = express()

const PORT = 5000

app.use(express.static('./public'))

app.get("/" , (req, res)=>{
    console.log('User hit the resource')
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.get("/about", (req, res)=>{
    res.status(200).send("About")
})


//To set up our own 404 response
app.all('*', (req, res)=>{
    res.status(404).send("No page like that")
})


app.listen(PORT, ()=>{
    console.log(`Server is running in Port ${PORT}`)
}) 