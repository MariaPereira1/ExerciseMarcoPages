const initialState = {
  isLogged: true,
  details: {
    username: ""
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isLogged: true,
        details: {
          username: action.payload.username
        }
      };
    default:
      return state;
  }
};

export default userReducer;
