import axios from 'axios';
import {
  LOGIN,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT,
  LOGOUT_FULFILLED,
  SIGNUP,
  SIGNUP_PENDING,
  SIGNUP_FULFILLED,
  SIGNUP_REJECTED
} from './actionTypes';

const initialState = {
  user: {},
  loading: false,
  error: false
};

export const login = (username, password) => {
  let data = axios
    .post('/api/login', { username, password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: data
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios.delete('/api/logout')
  };
};

export const signup = (username, password) => {
  let data = axios
    .post('/api/signup', { username, password })
    .then(res => res.data);
  return {
    type: SIGNUP,
    payload: data
  };
};

export default function(state = initialState, action) {
  console.log('action in userReducer ', action);
  let { type, payload } = action;
  switch (type) {
    case LOGIN_PENDING:
      return { ...state, loading: true };
    case LOGIN_FULFILLED:
      return {
        user: payload.data,
        loading: false
      };
    case LOGIN_REJECTED:
      return { ...state, loading: false, error: payload };
    case LOGOUT_FULFILLED:
      return { ...state, user: {} };
    case SIGNUP_PENDING:
      return { ...state, loading: true };
    case SIGNUP_FULFILLED:
      return { ...state, loading: false, user: payload };
    case SIGNUP_REJECTED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
