import { amadeus } from "../config/amadeus";

// Use the Amadeus Flight Delay Prediction API to predict the likelihood that a flight will be delayed.

const getFlightDelayPrediction = async (req, res) => {
    try {
        const { originLocationCode, destinationLocationCode, departureDate, departureTime, arrivalDate, arrivalTime, aircraftCode, carrierCode, flightNumber, duration } = req.body;
        const response = await amadeus.travel.predictions.flightDelay.get({
            originLocationCode,
            destinationLocationCode,
            departureDate,
            departureTime,
            arrivalDate,
            arrivalTime,
            aircraftCode,
            carrierCode,
            flightNumber,
            duration
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
}

export { getFlightDelayPrediction }
