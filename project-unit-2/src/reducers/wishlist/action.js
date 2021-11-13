export const setWish = (wish) => {
  // product: is an array of todo objects
  return {
    type: "SET_WISH",
    payload: wish,
  };
};

export const deletewish = (productId) => {
  return {
    type: "DELETE_WISH",
    payload: productId,
  };
};
