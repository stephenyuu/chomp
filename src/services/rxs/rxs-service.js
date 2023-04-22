import axios from "axios";

const RX_REST_API_URL = "http://localhost:4000/api/restaurants";

export const findRxs = async (searchParamsObject) => {
  const response = await axios.get(`${RX_REST_API_URL}`, {
    params: searchParamsObject,
  });
  return response.data;
};

export const findRxDetails = async(rxid) => {
  const response = await axios.get(`${RX_REST_API_URL}/${rxid}`);
  return response.data;
}
