import { FETCH_POSTS, FETCH_POST, DELETE_POST, ERROR } from '../actions';
import _ from 'lodash';
export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload, 'id');
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            return _.omit(state, action.payload);
        case ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}