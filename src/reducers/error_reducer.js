import { ERROR } from '../actions';
import _ from 'lodash';
export default function (state = {}, action) {
    switch (action.type) {
        case ERROR:
            console.log(action);
            return { message: 'action.payload', level: 'error' };
        default:
            return state;
    }
}