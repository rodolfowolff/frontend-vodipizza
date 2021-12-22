import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_SORT_NEW_REQUEST,
  PRODUCT_SORT_NEW_SUCCESS,
  PRODUCT_SORT_NEW_FAIL,
  PRODUCT_SORT_TOP_REQUEST,
  PRODUCT_SORT_TOP_SUCCESS,
  PRODUCT_SORT_TOP_FAIL,
} from './product.types';

export const listProducts = (size) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_DOMAIN}/product?size=${size}`
    );
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/product/${slug}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (slug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    await axios.delete(`${process.env.REACT_APP_SERVER_DOMAIN}/product/${slug}`, config);

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/product/`, product, config
    );

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (slug, product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_SERVER_DOMAIN}/product/${slug}`,
      product,
      config
    );

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listSortNewProducts =
  (order, pageNumber, sort = 'createdAt') =>
    async (dispatch) => {
      try {
        dispatch({ type: PRODUCT_SORT_NEW_REQUEST });
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/product/filter?sort=${sort}&order=${order}&pageNumber=${pageNumber}`
        );
        dispatch({
          type: PRODUCT_SORT_NEW_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_SORT_NEW_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };

export const listSortSoldProducts =
  (order, pageNumber, sort = 'sold') =>
    async (dispatch) => {
      try {
        dispatch({ type: PRODUCT_SORT_TOP_REQUEST });
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/product/filter?sort=${sort}&order=${order}&pageNumber=${pageNumber}`
        );
        dispatch({
          type: PRODUCT_SORT_TOP_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_SORT_TOP_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
