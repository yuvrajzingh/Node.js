const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res)=>{
    
    const newProducts = products.map((product)=>{
        const {id, name, image} = products;
        return {id, name, image}
    })
    
    res.json(products)
})

app.get('/api/products/:productID', (req, res)=>{
    
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID))
    
    if(!singleProduct){
        return res.status(404).send("Product Does not exist")
    }

    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params);
    // res.end(`<h1>review ${reviewID}</h1>`)
})


app.get('/api/v1/query', (req, res)=>{
    // console.log(req.query);
    const {search, limit } = req.query
    var sortedProducts = [...products]

    if(search){
        sortedProducts =  sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit)) 
    }

    if(sortedProducts.length < 1){
        // res.status(200).end("No products matched your search")

        return res.status(200).json({success: true, data: [ ]})
    }

    res.status(200).json(sortedProducts) 
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})