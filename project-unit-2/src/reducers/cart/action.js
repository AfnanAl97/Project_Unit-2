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

  export const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };