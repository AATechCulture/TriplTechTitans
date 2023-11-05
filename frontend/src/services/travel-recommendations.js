import { request } from "../../utilities/api";

const travelRecommendationsUrl = '/api/travel-recommendations'

const getTravelRecommendations = async (searchData) => request('GET', travelRecommendationsUrl, searchData);

export default {
    getTravelRecommendations
}
