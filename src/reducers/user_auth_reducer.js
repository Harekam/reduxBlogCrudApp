import { LOGGED_IN, LOGGED_OUT, LOGGING_IN, LOGIN_ERROR } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGGED_IN:
            return { ...state, authenticated: true };
        case LOGGED_OUT:
            return { ...state, authenticated: false };
        case LOGIN_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}