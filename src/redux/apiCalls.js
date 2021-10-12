import {loginStart, loginSuccess, loginFailure} from './userRedux';
import {publicRequest, userRequest} from '../requestMethods';
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess
} from './productRedux';
import {deleteProductFailure, deleteProductStart, deleteProductSuccess} from './productRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFailure());
  }
};
export const getProducts = async dispatch => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (e) {
    dispatch(getProductFailure(e));
  }
};
export const deleteProducts = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${product}`);
    dispatch(deleteProductSuccess(id));
  } catch (e) {
    dispatch(deleteProductFailure(e));
  }
};
export const updateProducts = async (dispatch, product, id) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({id: id, product: product}));
  } catch (e) {
    dispatch(updateProductFailure(e));
  }
};
export const addProducts = async (dispatch, product) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (e) {
    dispatch(addProductFailure(e));
  }
};
