import axios from "axios";

const REVIEWS_REST_API_URL = "http://localhost:4000/api/reviews";

const api = axios.create({
  withCredentials: true,
});

export const reviewRx = async (rxDetails, reviewText) => {
    const response = await api.post(`${REVIEWS_REST_API_URL}/review-rx/${rxDetails.id}/${rxDetails.name}`, { text: reviewText });
    return response.data;
  };

export const updateUser = async (reviewId, reviewText) => {
    const response = await api.put(`${REVIEWS_REST_API_URL}/${reviewId}`, { text: reviewText });
    return response.data;
};

export const deleteReview = async (reviewId) => {
  const response = await api.delete(`${REVIEWS_REST_API_URL}/delete/${reviewId}`);
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