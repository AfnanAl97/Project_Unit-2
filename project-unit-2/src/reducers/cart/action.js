export const setCart = (cart) => {
  // product: is an array of todo objects
  return {
    type: "SET_CART",
    payload: cart,
  };
};

export const deleteCart = (productId) => {
  return {
    type: "DELETE_CART",
    payload: productId,
  };
};

export const increment = (payload) => {
  return {
    type: "INCREMENT",
    payload: payload,
  };
};

export const decrement = (payload) => {
  return {
    type: "DECREMENT",
    payload: payload,
  };
};
