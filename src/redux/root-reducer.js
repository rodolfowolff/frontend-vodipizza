import { combineReducers } from 'redux';

import {
  cartReducer,
  cartCreateReducer,
  cartDetailsReducer,
  emptyCartReducer
} from './reducers/cart/cart.reducers';
import {
  orderCreateReducer,
  orderListUserReducer,
  orderListReducer,
  orderUpdateStatusReducer
} from './reducers/order/order.reducers';

import {
  userLoginReducer,
  userRegisterReducer,
  addUserAddressReducer,
  applyUserCouponReducer,
  removeUserCouponReducer,
  updateUserAddressReducer,
  userDetailAddressReducer,
  deleteUserAddressReducer,
  addToWishlistReducer,
  wishlistListReducer,
  removeFromWishlistReducer
} from './reducers/user/user.reducers';

import {
  categoryCreateReducer,
  categoryListReducer,
  categoryDeleteReducer,
  categoryDetailsReducer,
  categoryUpdateReducer,
} from './reducers/category/category.reducers';

import {
  productCreateReducer,
  productListReducer,
  productDeleteReducer,
  productDetailsReducer,
  productUpdateReducer,
  productSortNewReducer,
  productSortSoldReducer,
} from './reducers/product/product.reducers';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  addUserAddress: addUserAddressReducer,
  updateUserAddress: updateUserAddressReducer,
  userDetailAddress: userDetailAddressReducer,
  applyUserCoupon: applyUserCouponReducer,
  removeUserCoupon: removeUserCouponReducer,
  deleteUserAddress: deleteUserAddressReducer,
  userRegister: userRegisterReducer,

  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  categoryDetails: categoryDetailsReducer,
  categoryUpdate: categoryUpdateReducer,

  cart: cartReducer,
  cartCreate: cartCreateReducer,
  cartDetails: cartDetailsReducer,
  emptyCart: emptyCartReducer,

  orderCreate: orderCreateReducer,
  orderListUser: orderListUserReducer,
  orderList: orderListReducer,
  orderUpdateStatus: orderUpdateStatusReducer,

  addToWishlist: addToWishlistReducer,
  wishlistList: wishlistListReducer,
  removeFromWishlist: removeFromWishlistReducer,

  productCreate: productCreateReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productDetails: productDetailsReducer,
  productUpdate: productUpdateReducer,
  productSortNew: productSortNewReducer,
  productSortSold: productSortSoldReducer,
});

export default rootReducer;
