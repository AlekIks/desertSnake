const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    error: null,
    user: null
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOADING':
        return {
          ...state,
          isLoading: true
        };
      case 'USER_LOADED':
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.user
        };
      case 'USER_SUCCESS':
        localStorage.setItem("token", action.data.token);
        return {
          ...state,
          ...action.data,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        };
      case 'AUTH_ERROR':
      case 'USER_FAIL':
      case 'LOGOUT_SUCCESS':
        localStorage.removeItem("token");
        return {
          ...state, 
          errors: action.data, 
          token: null, 
          user: null,
          isAuthenticated: false, 
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default userReducer