import axios from "axios";
const RX_REST_API_URL = "http://localhost:4000/api/restaurants";

export const findRxs = async (rxSearchCriteria) => {
  const { term, location, price } = rxSearchCriteria;
  const response = await axios.get(`${RX_REST_API_URL}`, {
    params: {
      term,
      location,
      price,
    },
  });
  return response.data;
};
