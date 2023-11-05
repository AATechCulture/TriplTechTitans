import { request } from "../../utilities/api";

const flightOffersUrl = '/api/test/flight-offers'
const getActivitiesUrl = '/api/test/activities'
const getFlightDelayPredictionUrl = 'api/test/delay-prediction'

const getFlightOffers = async (searchData) => request('GET', flightOffersUrl, searchData);
const getActivities = async () => request('GET', getActivitiesUrl);
const getFlightDelayPrediction = async () => request('GET', getFlightDelayPredictionUrl);

export default {
    getFlightOffers,
    getActivities,
    getFlightDelayPrediction
}