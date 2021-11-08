export const signup = (user) => {
    // user: is an array of objects
    return {
      type: "SIGN_UP",
      payload: user,
    };
};
