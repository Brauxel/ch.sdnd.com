import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Layout from './components/layout';
import PostList from './components/post-list/post-list';
import Post from './components/post/post';
import Page from './components/page/page';
import NotFound from './components/not-found';

const routes = (
    <Route path="/" component={Layout}>
      <IndexRoute component={PostList}/>

      <Route path="post/:slug" component={Post} />
      <Route path="category/:categoryID" component={PostList} />
      <Route path="page/:slug" component={Page} />
      <Route path="*" component={NotFound}/>
    </Route>

);

export default routes;
