import axios from 'axios';
import { LOGIN, LOGOUT, SIGNUP, GET_USER } from './actionTypes';

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
    case LOGIN + '_PENDING':
      return { ...state, loading: true, error: false };
    case LOGIN + '_FULFILLED':
      return {
        ...state,
        user: payload,
        loading: false,
        error: false
      };
    case LOGIN + '_REJECTED':
      return { ...state, loading: false, error: payload };
    case LOGOUT + '_FULFILLED':
      return { ...state, user: {}, error: false };
    case SIGNUP + '_PENDING':
      return { ...state, loading: true, error: false };
    case SIGNUP + '_FULFILLED':
      return { ...state, loading: false, user: payload, error: false };
    case SIGNUP + '_REJECTED':
      return { ...state, loading: false, error: payload };
    case GET_USER + '_PENDING':
      return { ...state, loading: true, error: false };
    case GET_USER + '_FULFILLED':
      return { ...state, loading: false, user: payload, error: false };
    case GET_USER + '_REJECTED':
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
