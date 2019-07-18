import axios from 'axios';
import {
  GET_POSTS,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED
} from './actionTypes';

const initialState = {
  posts: [],
  error: false
};

export function getPosts(userId) {
  let data = axios.get(`/api/posts/${userId}`).then(res => res.data);
  return {
    type: GET_POSTS,
    payload: data
  };
}

export default function postsReducer(state = initialState, action) {
  console.log('action in postsReducer ', action);
  let { type, payload } = action;
  switch (type) {
    case GET_POSTS_FULFILLED:
      return { posts: payload, error: false };
    case GET_POSTS_REJECTED:
      return { ...state, error: payload };
    default:
      return state;
  }
}
