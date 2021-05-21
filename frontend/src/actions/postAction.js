import api from '../utils/api';
import { setAlert } from './alertAction';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,  
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';
import { API } from '../config'    
import axios from 'axios'


// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await api.get(`${API}/post`);

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err, status: err }
    });
  }
};

// Add like
export const addLike = (id, token) => async dispatch => {
  try {
    const res = await axios
    .put(`${API}/post/like/${id}`, "", {
     headers: {
    'Authorization': `Bearer ${token}`
    }}
    ); 
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    console.log(err.response)
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove like
export const removeLike = (id, token) => async dispatch => {
  try {
    const res = await axios
    .put(`${API}/post/unlike/${id}`, "", {
     headers: {
    'Authorization': `Bearer ${token}`
      }}
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    console.log(err.response)
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Delete post
export const deletePost = id => async dispatch => {
  try {
    await axios
    .delete(`${API}/post/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addPost = (userId, formData, token) => async dispatch => {
  try {
    const res = await 
      axios
    .post(`${API}/post/${userId}`, formData, {
     headers: {
    'Authorization': `Bearer ${token}`
    }
    });

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    console.log(err.response)
    console.log(userId)
  }
};



// Get post
export const getPost = id => async dispatch => {
  try {
    const res = await axios
    .get(`${API}/post/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
    console.log(res)
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err, status: err }
    });
  }
};

// Add comment
export const addComment = (userId, postId, formData, token) => async dispatch => {
  try {
    const res = await axios
    .post(`${API}/post/comment/${userId}/${postId}`, formData, {
     headers: {
    'Authorization': `Bearer ${token}`
    }});
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios
    .delete(`${API}/post/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};