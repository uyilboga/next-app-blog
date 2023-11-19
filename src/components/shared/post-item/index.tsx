import React from 'react';
import { PostCardProps } from '@/components/shared/post-item/PostItem.types';
import styles from './PostItem.module.scss';
import Button from '@/components/shared/button';
import { useRouter } from 'next/router';

const PostItem = (props: PostCardProps) => {
  const { title, body, id } = props;
  const router = useRouter();

  return (
    <div className={styles.postItem}>
      <div className={styles.postContent}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.desc}>
          <p>{body}</p>
        </div>
      </div>
      <div className={styles.more}>
        <Button variant="link" onClick={() => router.push(`/posts/${id}`)} text="learn more" />
      </div>
    </div>
  );
};

export default PostItem;
