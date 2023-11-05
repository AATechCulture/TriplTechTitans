import express from 'express'
import flightOffersController from '../controllers/flight-offers.js'

// create a router specifically for the flight offers path
const router = express.Router()

// Get all Flight-Offers
router.get('/', flightOffersController.getFlightOffers)

export default router