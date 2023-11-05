import axios from 'axios';

const getFlightOffers = async (req, res) => {
    try {
        const { originLocationCode, destinationLocationCode, departureDate, adults } = req.query;

        let data = '';

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adults}&nonStop=false&max=250`,
            headers: {
                'Authorization': `Bearer ${process.env.AMADEUS_API_KEY}`
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

