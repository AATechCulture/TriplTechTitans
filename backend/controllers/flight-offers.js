import axios from 'axios';

const getFlightOffers = async (req, res) => {
    try {
        const { originLocationCode, destinationLocationCode, departureDate, returnDate, numAdults } = req.query;

        let data = '';
        console.log(originLocationCode, destinationLocationCode, departureDate, returnDate, numAdults);

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adults}&returnDate=${returnDate}&max=10`,
            headers: {
                'Authorization': `Bearer H94mGqyhh7eGpPjgerbDDbzpZpR1`
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

export default { getFlightOffers }

