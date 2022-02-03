export const setCurrentUser = (isAuth) => {
  return {
    type: "SET_CURRENT_USER",
    isAuth,
  };
};
