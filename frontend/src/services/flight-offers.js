import { request } from "../../utilities/api";

const flightOffersUrl = '/api/flight-offers'

const getFlightOffers = async (searchData) => request('GET', flightOffersUrl, searchData);

export default {
    getFlightOffers
}
