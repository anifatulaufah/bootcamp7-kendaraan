const express = require('express')
const app = express()
require("./db") // database connection

// impoer routes file

const users_routes = require("./routes/users")
const transports_routes = require("./routes/transports")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.use("/user", users_routes)
app.use("/transport", transports_routes)

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
