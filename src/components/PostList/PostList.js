import React from 'react';
import { Post } from '../Post';

export const PostList = ({ posts }) => (

  posts.map(post => (
    <li key={post.id}>
      <Post article={post} />
    </li>
  ))
);
