import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  CREATE_ADDRESS_REQUEST,
  CREATE_ADDRESS_SUCCESS,
  CREATE_ADDRESS_FAIL,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAIL,
  ADDRESS_DETAILS_REQUEST,
  ADDRESS_DETAILS_SUCCESS,
  ADDRESS_DETAILS_FAIL,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAIL,
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_SUCCESS,
  APPLY_COUPON_FAIL,
  REMOVE_COUPON_REQUEST,
  REMOVE_COUPON_SUCCESS,
  REMOVE_COUPON_FAIL,
  ADD_PRODUCT_TO_WISHLIST_REQUEST,
  ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  ADD_PRODUCT_TO_WISHLIST_FAIL,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  REMOVE_PRODUCT_FROM_WISHLIST_REQUEST,
  REMOVE_PRODUCT_FROM_WISHLIST_SUCCESS,
  REMOVE_PRODUCT_FROM_WISHLIST_FAIL,
} from './user.types';
import axios from 'axios';
// import { generateGravatar } from '../../../utils/functions';

export const logout = () => (dispatch) => {
  // firebase.auth().signOut();
  dispatch({ type: USER_LOGOUT });
};

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/login`, { email, password });
    const idTokenResult = await data.getIdTokenResult();
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { ...data, token: data.token },
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: 'Usuário ou senha incorretos!',
    });
  }
};

export const registerUser =
  (displayName, password, email) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/auth`,
        {},
        {
          headers: {
            Authorization: idTokenResult.token,
          },
        }
      );
      const idTokenResult = await data.getIdTokenResult(true);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: {
          ...data,
          token: idTokenResult.token,
        },
      });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          ...data,
          token: idTokenResult.token,
        },
      });
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: "Ocorreu um erro. Tente novamente",
      });
    }
  };

export const getCurrentUser = (token) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/current`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {
        ...data,
        token,
      },
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addAddress = (address) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_ADDRESS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/address/add/`,
      address,
      config
    );

    dispatch({
      type: CREATE_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ADDRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateAddress = (_id, address) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_ADDRESS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/address/update/${_id}`,
      address,
      config
    );

    dispatch({
      type: UPDATE_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ADDRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAddress = (_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADDRESS_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/user/address/${_id}`, config);

    dispatch({
      type: ADDRESS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADDRESS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteAddress = (_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_ADDRESS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.delete(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/address/delete/${_id}`,
      config
    );

    dispatch({
      type: DELETE_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ADDRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const applyCoupon = (coupon) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPLY_COUPON_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/coupon`,
      { coupon },
      config
    );

    dispatch({
      type: APPLY_COUPON_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: APPLY_COUPON_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeCoupon = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_COUPON_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/coupon`,
      {},
      config
    );

    dispatch({
      type: REMOVE_COUPON_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_COUPON_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProductToWishlist = (productId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_PRODUCT_TO_WISHLIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/wishlist`,
      { productId },
      config
    );

    dispatch({
      type: ADD_PRODUCT_TO_WISHLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_TO_WISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getWishlist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_WISHLIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/user/wishlist`, config);

    dispatch({
      type: GET_WISHLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_WISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductFromWishlist = (productId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_PRODUCT_FROM_WISHLIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/wishlist/${productId}`,
      {},
      config
    );

    dispatch({
      type: REMOVE_PRODUCT_FROM_WISHLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_PRODUCT_FROM_WISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
