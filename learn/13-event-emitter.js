const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data received ${name} ${id}`)
})
customEmitter.on('response', ()=>{
    console.log(`other data received`)
})

customEmitter.emit('response', "Yuvi", 3)  