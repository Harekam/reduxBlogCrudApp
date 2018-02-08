import axios from 'axios';
import { actions as toastrActions } from 'react-redux-toastr';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const ERROR = 'ERROR';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';


const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = '?key=s1ngh1sk1ng';

function onError(reason) {
    return {
        type: ERROR,
        payload: reason
    }
}

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: FETCH_POSTS, payload: data });
        }).catch((reason) => dispatch(onError(reason)));
    };
}
export function login(callback) {
    return (dispatch) => {
        dispatch({ type: LOGGING_IN, payload: { isLoggingIn: true } });
        setTimeout(() => {
            const data = { accessToken: 'accessToken jwt' };
            localStorage.setItem('userAuthToken', data.accessToken);
            dispatch({ type: LOGGED_IN, payload: data });
            return callback();
        }, 1000);
    };
}
export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: CREATE_POST, payload: data });
            return callback();
        }).catch((reason) => {
            dispatch(onError(reason));
            return callback(reason);
        });
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}
export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());
    return {
        type: DELETE_POST,
        payload: id
    }
}