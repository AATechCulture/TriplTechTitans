import { amadeus } from "../config/amadeus";

export const getFlightOffers = async (req, res) => {
    try {
        const { originLocationCode, destinationLocationCode, departureDate, adults } = req.query;
        const response = await amadeus.shopping.flightOffers.get({
            originLocationCode,
            destinationLocationCode,
            departureDate,
            adults
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};

export { getFlightOffers }

