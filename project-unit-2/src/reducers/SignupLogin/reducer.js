const initialState = {
  users: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an array
      case "LOG_IN":
        return {
          videos: payload,
        };
      // the payload is an array
      case "SIGN_UP":
        return {
          videos: payload,
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  