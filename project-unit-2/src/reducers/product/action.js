export const getProducts = (products) => {
  // products: is an array of objects
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
};
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

export const filtering = (products) => {
  // products: is an array of objects
  return {
    type: "FILTERING_PRODUCTS",
    payload: products,
  };
};
