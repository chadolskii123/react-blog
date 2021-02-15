import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MemoPage from './pages/MemoPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Reactors</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={TodoPage} path="/todo" />
      <Route component={MemoPage} path="/memo" />
    </>
  );
};

export default App;
