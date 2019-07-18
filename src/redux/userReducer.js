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
  SIGNUP_REJECTED,
  GET_USER,
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED
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

export const getUser = () => {
  let data = axios.get('/api/user').then(res => res.data);
  return {
    type: GET_USER,
    payload: data
  };
};

export default function(state = initialState, action) {
  console.log('action in userReducer ', action);
  let { type, payload } = action;
  switch (type) {
    case LOGIN_PENDING:
      return { ...state, loading: true, error: false };
    case LOGIN_FULFILLED:
      return {
        ...state,
        user: payload,
        loading: false,
        error: false
      };
    case LOGIN_REJECTED:
      return { ...state, loading: false, error: payload };
    case LOGOUT_FULFILLED:
      return { ...state, user: {}, error: false };
    case SIGNUP_PENDING:
      return { ...state, loading: true, error: false };
    case SIGNUP_FULFILLED:
      return { ...state, loading: false, user: payload, error: false };
    case SIGNUP_REJECTED:
      return { ...state, loading: false, error: payload };
    case GET_USER_PENDING:
      return { ...state, loading: true, error: false };
    case GET_USER_FULFILLED:
      return { ...state, loading: false, user: payload, error: false };
    case GET_USER_REJECTED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
