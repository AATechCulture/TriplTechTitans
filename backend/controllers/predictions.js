import axios from 'axios';

// Use the Amadeus Flight Delay Prediction API to predict the likelihood that a flight will be delayed.

const getFlightDelayPrediction = async (req, res) => {
    try {
        const { originLocationCode, destinationLocationCode, departureDate, departureTime, arrivalDate, arrivalTime, aircraftCode, carrierCode, flightNumber, duration } = req.body;

        let data = '';

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://test.api.amadeus.com/v1/travel/predictions/flight-delay?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&departureTime=${departureTime}&arrivalDate=${arrivalDate}&arrivalTime=${arrivalTime}&aircraftCode=${aircraftCode}&carrierCode=${carrierCode}&flightNumber=${flightNumber}&duration=${duration}`,
            headers: {
                'Authorization': 'Bearer token'
            },
            data: data
        };

        const response = await axios.request(config);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};

export default { getFlightDelayPrediction }

