import axios from "axios";

const LIKES_REST_API_URL = "http://localhost:4000/api/likes";

const api = axios.create({
  withCredentials: true,
});

export const likeRx = async (rx) => {
  const response = await api.post(`${LIKES_REST_API_URL}/${rx.rxId}`, rx);
  return response.data;
};

export const isRxLikedByUser = async (rxId, userId) => {
  const response = await api.post(`${LIKES_REST_API_URL}/${rxId}/${userId}`);
  return response.data;
};

export const undoLikeRx = async (rxId, userId) => {
  const response = await api.delete(
    `${LIKES_REST_API_URL}/undo/${rxId}/${userId}`
  );
  return response.data;
};

export const findLikedRxsOfUser = async (userId) => {
  const response = await axios.get(
    `${LIKES_REST_API_URL}/user/${userId}`
  );
  return response.data;
};

export const findLikesOfRx = async(rxId) => {
  const response = await axios.get(
    `${LIKES_REST_API_URL}/rxs/${rxId}`
  );
  return response.data;    
}