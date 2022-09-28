import { createSelector } from 'reselect';
import { CartItem } from './cart.types';

import { CartState } from './cart.reducer';

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
