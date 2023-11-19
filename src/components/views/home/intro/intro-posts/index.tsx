import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchPosts } from '@/store/features/posts/posts.slice';
import styles from '@/components/views/home/intro/Intro.module.scss';
import PostCard from '../../../../shared/post-item';
import { Spinner } from 'react-bootstrap';

const IntroPosts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.posts);

  const getPosts = () => {
    dispatch(fetchPosts() as never);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.postWrapper}>
      {loading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        posts.map((post) => (
          <div className={styles.postItem} key={post.id}>
            <PostCard title={post.title} body={post.body} id={post.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default IntroPosts;
