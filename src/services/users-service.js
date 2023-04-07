import axios from "axios";

const USERS_REST_API_URL = "http://localhost:4000/api/users";

const api = axios.create({
  withCredentials: true,
});

export const createUser = async (user) => {
  const response = await api.post(USERS_REST_API_URL, user);
  return response.data;
};
