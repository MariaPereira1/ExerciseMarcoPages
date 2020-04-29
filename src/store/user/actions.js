export const loginUserAction = () => ({
  type: "LOGIN_USER"
});

export const detailsUserAction = (email, name) => ({
  type: "LOGIN_USER_DETAILS",
  payload: {
    email,
    name
  }
});

export const logoutUserAction = () => ({
  type: "LOGOUT_USER"
});
