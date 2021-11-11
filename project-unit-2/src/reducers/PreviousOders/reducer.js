const initialState = {
    PrevList: {
      1: [],
      2: [],
    },
  };

const PrevOrderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "AddToPrev":
            const newState = Object.assign({}, state.PrevList);
            const array = newState[payload.id] || [];
            array.push(payload.item);
            newState[payload.id] = array;
            return {
                PrevList: newState,
            };
            default:
                return state;
        }
    };
    
    export default PrevOrderReducer;