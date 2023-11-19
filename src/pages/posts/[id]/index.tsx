import React from 'react';
import { fetchPost } from '@/services/posts.service';
import { GetServerSideProps } from 'next';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import { PostDetailProps } from '@/pages/posts/[id]/PostDetailPage.types';
import PostDetail from '@/components/views/post-detail-page/post-detail';
import PostComments from '@/components/views/post-detail-page/post-comments';

const PostDetailPage = (props: PostDetailProps) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>Next App - {post.title}</title>
        <meta name="description" content={post.body.substring(1, 60)} />
      </Head>
      <Container>
        <PostDetail post={post} />
        <PostComments postId={post.id} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const { id } = context.params;
  const response = await fetchPost(Number(id));
  if (response.status === 'error') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: response.data,
    },
  };
};
export default PostDetailPage;
