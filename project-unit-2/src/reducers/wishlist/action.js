export const setWish = (product) => {
    // product: is an array of todo objects
    return {
      type: "SET_WISH",
      payload: product,
    };
  };
  
  export const deletewish = (productId) => {
    return {
      type: "DELETE_WISH",
      payload: productId,
    };
  };