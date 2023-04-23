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

export const isRxLiked = async (rxId, userId) => {
  const response = await api.post(`${RX_REST_API_URL}/${rxId}/${userId}`);
  return response.data;
};

export const dislikeRx = async (rxId, userId) => {
  const response = await api.delete(`${RX_REST_API_URL}/dislike/${rxId}/${userId}`);
  return response.data;
};

export const findLikedRxs = async (userId) => {
  const response = await axios.get(`${RX_REST_API_URL}/findLikes/${userId}`);
  return response.data;
};