const initialState = {
  users: [{
    username: "Admin",
    password:"4444"
  },
  {
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
          // const oldUser = users.findIndex(function(user){
          //   return user.username === users.username
          // })
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
  