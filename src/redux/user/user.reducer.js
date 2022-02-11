const INITIAL_STATE = false;

const userReducer = (state = INITIAL_STATE, action) => {
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
