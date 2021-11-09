const initialState = {
  wishlist: {
    1: [],
    2: [],
  },
};

const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // the payload is an array
    case "SET_WISH":
      const newState = Object.assign({}, state.wishlist);
      const array = newState[payload.id] || [];
      array.push(payload.item);
      newState[payload.id] = array;
      return {
        wishlist: newState,
      };
    case "DELETE_WISH":
      // the payload is an array
      const deletestate = Object.assign({}, state.wishlist);
      const arr = deletestate[payload.id];
      const newarray = arr.filter((element) => {
        return element.id !== payload.itemId;
      });
      deletestate[payload.id] = newarray;
      return {
        wishlist: deletestate,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
