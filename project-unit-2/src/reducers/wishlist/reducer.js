const initialState = {
    wishlist: [],
};

const wishlistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an array
      case "SET_WISH":
        return {
            wishlist: [...state.wishlist, payload]
        };
      case "DELETE_WISH":
        // the payload is the id
        return {
            wishlist: state.wishlist.filter((element) => {
            return element.id !== payload;
            }),
        };
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  