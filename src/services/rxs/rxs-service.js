import axios from "axios";

const RX_REST_API_URL = "http://localhost:4000/api/restaurants";

const api = axios.create({
  withCredentials: true,
});

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

export const likeRx = async (rx) => {
  const response = await api.post(`${RX_REST_API_URL}/${rx.rxId}/likes`, rx);
  return response.data;
};