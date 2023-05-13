const express = require('express')
const server = express()
const cors = require('cors')
const { Users } = require('./users')

server.use(cors())

server.get("/", (req, res) => {
    const { q } = req.query

    const keys = ["first_name", "last_name", "email"]

    const search = (data) => {
        return data.filter(
            (item) => {
                return keys.some(key => item[key]?.toLowerCase().includes(q))
            })
    }
    res.json(search(Users).splice(0, 10))
})

server.listen(5000, () => console.log("API is working"))