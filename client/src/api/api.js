import axios from "axios";

const BASE_URL = "http://localhost:5000"; // backend URL

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/user/read`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/user/read/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
