const express = require('express')
const cors = require('cors')
const ratelimit = require('express-rate-limit')
    // const responseTime = require("response-time");
    // const { createClient } = require("redis");

async function main() {

    const PORT = process.env.PORT || 3000

    const app = express()

    // Rate limiting
    const limiter = ratelimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
        message: 'Too many request from this IP',
    })
    app.use(limiter)
    app.set('trust proxy', 1) // trust first proxy

    // // Routes
    app.use('/', require('./routes/index.routes'))

    // // Enable cors
    app.use(cors())

    // await SingletonRedis.getInstance()

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

main()