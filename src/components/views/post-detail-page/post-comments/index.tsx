import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchPostComments } from '@/store/features/posts/posts.slice';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import CommentItem from '@/components/shared/comment-item';
import styles from './PostComments.module.scss';

const PostComments = (props: { postId: number }) => {
  const { postId } = props;
  const dispatch = useAppDispatch();

  const { comments, commentsLoading } = useAppSelector((state) => state.posts);

  const getPostComments = () => {
    dispatch(fetchPostComments(postId) as never);
  };

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <div className={styles.postComments}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={12}>
            <h3>Comments</h3>
            {commentsLoading ? (
              <Spinner animation="border" variant="secondary" />
            ) : (
              comments.map((comment) => <CommentItem key={comment.id} email={comment.email} body={comment.body} />)
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostComments;
