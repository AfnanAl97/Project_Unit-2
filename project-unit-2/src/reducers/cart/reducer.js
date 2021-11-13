const initialState = {
  cartList: {
    1: [],
    2: [],
  },
};

const cartListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CART":
      console.log(payload);
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
      console.log(state.cartList[3]);
      const elementIndex = state.cartList[3].findIndex(
        (element) => element.id === payload.id
      );
      const newArr = [...state.cartList[3]];
      console.log(newArr);
      newArr[elementIndex] = {
        ...newArr[elementIndex],
        count: newArr[elementIndex].count + 1,
      };
      console.log(newArr);
      const obj = {
        ...state.cartList,
        3: newArr,
      };
      return {
        cartList: obj,
      };
    case "DECREMENT":
      console.log(state.cartList[3]);
      const elementIndex2 = state.cartList[3].findIndex(
        (element) => element.id === payload.id
      );
      const newArr2 = [...state.cartList[3]];
      console.log(newArr2);
      newArr2[elementIndex2] = {
        ...newArr2[elementIndex2],
        count: newArr2[elementIndex2].count - 1,
      };
      console.log(newArr2);
      const obj2 = {
        ...state.cartList,
        3: newArr2,
      };
      return { cartList: obj2 };

    default:
      return state;
  }
};

export default cartListReducer;
