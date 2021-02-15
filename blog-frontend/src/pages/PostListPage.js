import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import PaginationContainer from '../components/post/PaginationContainer';
import PostListContainer from '../components/post/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
