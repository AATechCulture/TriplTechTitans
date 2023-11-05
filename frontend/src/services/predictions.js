import { request } from "../../utilities/api";

const predictionsUrl = '/api/predictions'

const getFlightDelayPrediction = async (searchData) => request('GET', predictionsUrl, searchData);

export {
    getFlightDelayPrediction
}

