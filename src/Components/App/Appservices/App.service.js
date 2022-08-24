import Axios from "axios";

import API_URL from "./API_URL";
import authHeader from "./auth-header";

const getList = endpoint => {
  return Axios.get(`${API_URL}/${endpoint}`, {
    /** Checks if users logged in, in case it is nessecery */
    headers: authHeader(),
  });
};

const getDetails = (endpoint, id) => {
  /** appservice.get("artist", 25) */
  return Axios.get(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

const Create = (endpoint, data) => {
  return Axios.post(`${API_URL}/${endpoint}`, data, {
    headers: authHeader(),
  });
};

const Login = async (username, password) => {
  return await Axios.post(`https://api.mediehuset.net/token`, { username, password });
};

const Logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

const Update = (endpoint, id, data) => {
  return Axios.put(`${API_URL}/${endpoint}/${id}`, data, {
    headers: authHeader(),
  });
};

const Remove = (endpoint, id) => {
  /** remove ( "artist" , 23) */
  return Axios.delete(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

const appService = {
  getList,
  getDetails,
  Create,
  Update,
  Remove,
  Login,
  Logout,
};

export default appService;
