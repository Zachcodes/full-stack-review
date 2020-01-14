import axios from 'axios';
import { GET_POSTS, DELETE_POST, EDIT_POST, SAVE_POST } from './actionTypes';

const initialState = {
  posts: [],
  error: false
};

export function getPosts(userId) {
  return {
    type: GET_POSTS,
    payload: axios.get(`/api/posts/${userId}`).then(res => res.data)
  };
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: axios.delete(`/api/posts/${postId}`).then(res => res.data)
  };
}

export function editPost(postId, newTitle, newContent) {
  return {
    type: EDIT_POST,
    payload: axios
      .put(`/api/posts/edit/${postId}`, { newTitle, newContent })
      .then(res => res.data)
  };
}

export function savePost(title, content) {
  return {
    type: SAVE_POST,
    payload: axios.post(`/api/posts`, { title, content }).then(res => res.data)
  };
}

export default function postsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_POSTS}_FULFILLED`:
      return { posts: payload, error: false };
    case `${GET_POSTS}_REJECTED`:
      return { ...state, error: payload };
    case `${EDIT_POST}_FULFILLED`:
      return { posts: payload, error: false };
    case `${DELETE_POST}_FULFILLED`:
      return { posts: payload, error: false };
    case `${SAVE_POST}_FULFILLED`:
      return { posts: payload, error: false };
    default:
      return state;
  }
}
