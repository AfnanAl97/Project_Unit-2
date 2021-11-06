export const setProducts = (products) => {
    // products: is an array of objects
    return {
      type: "SET_PRODUCTS",
      payload: products,
    };
  };

export const searching = (products) => {
    // products: is an array of objects
    return {
      type: "SEARCH_PRODUCTS",
      payload: products,
    };
};
