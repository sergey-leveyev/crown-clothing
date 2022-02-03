const INITIAL_STATE = false;

const userReducer = (state = INITIAL_STATE, action) => {
  console.log("user reducer >>>", action);
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};

export default userReducer;
