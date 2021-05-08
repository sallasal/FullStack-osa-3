const express = require('express')
const app = express()

let connections = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Slalla Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abmarov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Puhelinluettelosovellus</h1>')
})
  
app.get('/api/persons', (req, res) => {
    res.json(connections)
})

app.get('/api/info', (req, res) => {
    const timestamp = new Date()
    const peopleAmount = connections.length
    res.send(`<p>Phonebook has info for ${peopleAmount} people.</p> <p> ${timestamp} </p>`)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)