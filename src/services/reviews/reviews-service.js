import axios from "axios";

const REVIEWS_REST_API_URL = "http://localhost:4000/api/reviews";

const api = axios.create({
  withCredentials: true,
});

export const deleteReview = async (rxId, userId) => {
  const response = await api.delete(`${REVIEWS_REST_API_URL}/${rxId}/delete/${userId}`);
  return response.data;
};

export const findReviewsOfRx = async (rxId) => {
  const response = await axios.get(`${REVIEWS_REST_API_URL}/rxs/${rxId}`);
  return response.data;
}

export const findReviewedRxsOfUser = async (userId) => {
  const response = await axios.get(`${REVIEWS_REST_API_URL}/user/${userId}`);
  return response.data;
};
