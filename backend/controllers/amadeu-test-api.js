import activitiesData from '../data/activities.json' assert {type: "json"}
import delayPredictionData from '../data/delay-prediction.json' assert {type: "json"}
import flightOffersData from '../data/flight-offers.json' assert {type: "json"}

// Get All Activities
const getActivities = async (req, res) => {
    try {
        res.status(200).json(activitiesData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};

// Get Flight Delay Prediction
const getFlightDelayPrediction = async (req, res) => {
    try {
        res.status(200).json(delayPredictionData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};

// Get Flight Offers
const getFlightOffers = async (req, res) => {
    try {
        res.status(200).json(flightOffersData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};

export default { getActivities, getFlightDelayPrediction, getFlightOffers }

