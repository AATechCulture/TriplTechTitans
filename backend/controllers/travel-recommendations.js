// Get personalized travel recommendations for a user based on their preferences and past trips. 
import { amadeus } from "../config/amadeus";

const getTravelRecommendations = async (req, res) => {
    try {
        const { cityCodes, travelerCountryCode } = req.body;
        const response = await amadeus.referenceData.recommendations.get(
            {
                cityCodes,
                travelerCountryCode
            }
        );
        res.status(200).json(response.data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};

export { getTravelRecommendations }