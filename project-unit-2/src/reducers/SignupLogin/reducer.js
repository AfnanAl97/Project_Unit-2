const initialState = {
  users: [{
    id:"1",
    username: "Admin",
    password:"4444"
  },
  {
    id:"2",
    username: "Afnan",
    password:"1234"
  }],
};

const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an array
      case "LOG_IN":
        return {
          users: payload,
          
        };
      // the payload is an array
      case "SIGN_UP":
        return {
          users: payload,
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  