import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../style/style.css';
import '../style/style.scss';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Home from './components/home';
import requireAuth from './components/require_auth';
import noRequireAuth from './components/require_no_auth';
import store from './store';
import ReduxToastr from 'react-redux-toastr'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/posts/new" component={requireAuth(PostsNew)} />
            <Route path="/posts/:id" component={requireAuth(PostsShow)} />
            <Route path="/home" component={requireAuth(PostsIndex)} />
            <Route path="/" component={noRequireAuth(Home)} />
          </Switch>
        </div>
      </BrowserRouter>
      <ReduxToastr
        progressBar />
    </div>
  </Provider>
  , document.querySelector('.container'));
