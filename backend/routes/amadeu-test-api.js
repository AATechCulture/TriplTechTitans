import express from 'express'
import AmadeuTestAPIController from '../controllers/amadeu-test-api.js'

// create a router specifically for the flight offers path
const router = express.Router()

// Get All Activities
router.get('/activities', AmadeuTestAPIController.getActivities)

// Get Flight Delay Prediction
router.get('/delay-prediction', AmadeuTestAPIController.getFlightDelayPrediction)

// Get Flight Offers
router.get('/flight-offers', AmadeuTestAPIController.getFlightOffers)

export default router