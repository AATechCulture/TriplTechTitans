import axios from 'axios';

const getTravelRecommendations = async (req, res) => {
    try {
        const { latitude, longitude } = req.body;

        let data = '';

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://test.api.amadeus.com/v1/shopping/activities?latitude=${latitude}&longitude=${longitude}&radius=1`,
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

export default { getTravelRecommendations }
