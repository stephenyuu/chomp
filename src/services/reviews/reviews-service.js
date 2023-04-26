import axios from "axios";

const REVIEWS_REST_API_URL = "http://localhost:4000/api/reviews";

const api = axios.create({
  withCredentials: true,
});

export const reviewRx = async (rx) => {
  const response = await api.post(`${REVIEW_REST_API_URL}/${rx.rxId}/reviews`, rx);
  return response.data;
};

export const deleteReview = async (rxId, userId) => {
  const response = await api.delete(`${RX_REST_API_URL}/${rxId}/delete/${userId}`);
  return response.data;
};

export const findRxReviews = async (userId) => {
  const response = await axios.get(`${RX_REST_API_URL}/reviews/${userId}`);
  return response.data;
};