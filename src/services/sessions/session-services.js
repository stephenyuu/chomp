import axios from "axios";

const SESSIONS_REST_API_URL = "http://localhost:4000/api/sessions";

const api = axios.create({
  withCredentials: true,
});

export const createSession = async (session) => {
  const response = await api.post(`${SESSIONS_REST_API_URL}/createSession`, session);
  return response.data;
};

export const joinSession = async (session) => {
  console.log(session)
  const response = await api.put(`${SESSIONS_REST_API_URL}/join/${session.groupSessionCode}`, session);
  return response.data;
};

export const updateSession = async (session) => {
    const response = await api.put(`${SESSIONS_REST_API_URL}/${session._id}`, session);
    return response.data;
  };
  

