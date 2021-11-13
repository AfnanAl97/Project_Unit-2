export const signup = (user) => {
  // user: is an array of objects
  return {
    type: "SIGN_UP",
    payload: user,
  };
};

export const login = (user) => {
  // user: is an array of objects
  return {
    type: "LOG_IN",
    payload: user,
  };
};

export const logout = (user) => {
  // user: is an array of objects
  return {
    type: "LOG_OUT",
    payload: user,
  };
};
