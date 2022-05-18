const express = require('express')
const router = express.Router()
const needle = require('needle')
const apiCache = require('apicache').middleware
const rateLimit = require('express-rate-limit')
const { MemoryStore } = require('express-rate-limit')
const { createClient } = require('redis')
const { getCategorie } = require('../controllers/index.controllers')

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    store: new MemoryStore(),
})


router.get('/categories/:id', apiLimiter, apiCache('5 minutes'), async(req, res) => {
    try {
        const apiResponse = await getCategorie(req.params.id)

        res.json(apiResponse.body)
    } catch (error) {
        res.status(500).json({ error })
    }
})

module.exports = router