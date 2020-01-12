const initial = {
  name: null,
  token: null,
  loggedIn: false,
  isAdmin: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case "LOGIN_MOCK_USER":
      return {
        ...state,
        name: "Benjamin",
        loggedIn: true,
        isAdmin: false
      };
    case "LOGIN_MOCK_ADMIN":
      return {
        ...state,
        name: "Loïc",
        loggedIn: true,
        isAdmin: true
      };
    case "LOGIN_LOGOUT":
      return {
        ...initial
      };
    default:
      return state;
  }
};
