const initialState = {
  users: [{
    id: 1,
    username: "Admin",
    password:"4444",
  },
  {
    id: 2,
    username: "Afnan",
    password:"1234",
  }],
  currentUser:{},
  isLoggedIn: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an array
      case "SIGN_UP":
        return {
          users: [...state.users, payload],
          currentUser: payload,
          isLoggedIn:true,

        };
      case "LOG_IN":
        return {
          users: state.users,
          currentUser: payload,
          isLoggedIn: true
        };
      case "LOG_OUT":
        return {
          users: state.users,
          currentUser: {},
          isLoggedIn: false
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  