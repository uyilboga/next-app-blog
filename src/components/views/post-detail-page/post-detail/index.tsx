import React from 'react';
import styles from './PostDetail.module.scss';
import { IPost } from '@/types/posts.types';

const PostDetail = (props: { post: IPost }) => {
  const { post } = props;
  return (
    <div className={styles.postDetail}>
      <h1>{post.title}</h1>
      <div className={styles.postDetailContent} dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default PostDetail;
