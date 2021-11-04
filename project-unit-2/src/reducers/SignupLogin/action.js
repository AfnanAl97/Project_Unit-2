export const Login = (user) => {
    // user: is an array of objects
    return {
      type: "LOG_IN",
      payload: user,
    };
  };

export const Signup = (user) => {
    // user: is an array of objects
    return {
      type: "SIGN_UP",
      payload: videos,
    };
};
