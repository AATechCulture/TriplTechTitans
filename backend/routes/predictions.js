import express from 'express'
import predictionsController from '../controllers/predictions.js'

// create a router specifically for the predictions path
const router = express.Router()

// Get all predictions
router.get('/', predictionsController.getFlightDelayPredictioin)


export default router