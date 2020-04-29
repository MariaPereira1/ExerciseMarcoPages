const initialState = {
  isLogged: false,
  details: {
    email: "",
    name: ""
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isLogged: true
      };
    case "LOGIN_USER_DETAILS":
      return {
        ...state,
        details: {
          email: action.payload.email,
          name: action.payload.name
        }
      };
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
