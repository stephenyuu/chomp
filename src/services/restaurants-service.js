import axios from 'axios';
const RX_REST_API_URL = "http://localhost:4000/api/restaurants"

export const findRxs = async (rxSearchCriteria) => {
    const response = await axios.get(RX_REST_API_URL, rxSearchCriteria);
    return response.data;
}