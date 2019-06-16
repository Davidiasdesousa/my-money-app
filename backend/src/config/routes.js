const express = require('express')

module.exports = function (server) {
    // URL BASE
    const router = express.Router()
    server.use('/api', router)

    // CLYCLE PAYMENT ROUTES

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}