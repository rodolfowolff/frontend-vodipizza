import axios from "axios";
import jwt_decode from "jwt-decode";

export const checkTokenExp = async (token, dispatch) => {
  const decoded = jwt_decode(token);

  if (decoded.exp >= Date.now() / 1000) return;

  const res = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/refresh_token`);

  dispatch({ type: 'AUTH', payload: res.data });

  return res.data.access_token;
};
