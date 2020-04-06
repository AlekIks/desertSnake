import axios from "axios";
import { returnErrors } from "./messages";


///////////////
// LOAD USER
///////////////
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: "USER_LOADING" });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: "USER_LOADED",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "AUTH_ERROR"
      });
    });
};

///////////////
// LOGIN USER
///////////////

export const loginUser = (email, password) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: "USER_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "USER_FAIL"
      });
    });
};

///////////////
// REGISTER USER
///////////////
export const registerUser = ({ name, surname, phone, email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, surname, phone, email, password });

  axios
    .post("/api/auth/register", body, config)
    .then(res => {
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "REGISTER_FAIL"
      });
    });
};

// LOGOUT USER
export const logoutUser = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then(res => {
      dispatch({ type: 'CLEAR_LEADS' });
      dispatch({
        type: "LOGOUT_SUCCESS"
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
