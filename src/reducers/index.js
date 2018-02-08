import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import errorReducer from './error_reducer';
import UserAuthReducer from './user_auth_reducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  toastr: toastrReducer,
  error: errorReducer,
  auth: UserAuthReducer
});

export default rootReducer;
