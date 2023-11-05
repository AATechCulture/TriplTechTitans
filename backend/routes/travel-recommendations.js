import express from 'express'
import recommendationsController from '../controllers/travel-recommendations.js'

// create a router specifically for the travel recommendations path
const router = express.Router()

// Get all travel recommendations
router.get('/', recommendationsController.getTravelRecommendations)


export default router