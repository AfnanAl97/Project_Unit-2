const initialState = {
    cartList: {
      1: [],
      2: [],
    },
  };

const cartListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_CART":
            const newState = Object.assign({}, state.cartList);
            const array = newState[payload.id] || [];
            array.push(payload.item);
            newState[payload.id] = array;
            return {
              cartList: newState,
            };
        case "DELETE_CART":
            const deletestate = Object.assign({}, state.cartList);
            const arr = deletestate[payload.id];
            const newarray = arr.filter((element) => {
              return element.id !== payload.itemId;
            });
            deletestate[payload.id] = newarray;
            return {
                cartList: deletestate,
            };
        case "INCREMENT":
          return {
             count: state.count+1
          };
        case "DECREMENT":
          return {count: state.count-1};

        default:
            return state;
    }
};

export default cartListReducer;