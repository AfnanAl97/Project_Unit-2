export const setProducts = (products) => {
    // products: is an array of objects
    return {
      type: "SET_PRODUCTS",
      payload: products,
    };
  };

export const deleteProduct = (productId) => {
    return {
      type: "DELETE_PRODUCT",
      payload: productId,
    };
};

export const updateProducts = (products) => {
  return {
    type: "UPDATE_PRODUCTS",
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

