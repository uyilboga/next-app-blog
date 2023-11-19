import axiosClient from '@/utils/lib/axiosClient';
import { AxiosResponse } from 'axios';
import { IPost } from '@/types/posts.types';
export const fetchPosts = async () => {
  try {
    const response: AxiosResponse<IPost[]> = await axiosClient.get('/posts');
    return {
      status: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      status: 'error',
    };
  }
};

export const fetchPost = async (postId: number) => {
  try {
    const response: AxiosResponse<IPost> = await axiosClient.get(`/posts/${postId}`);
    return {
      status: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      status: 'error',
    };
  }
};

export const fetchPostComments = async (postId: number) => {
  try {
    const response: AxiosResponse = await axiosClient.get(`/posts/${postId}/comments`);
    return {
      status: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      status: 'error',
    };
  }
};

const postService = {
  fetchPosts,
  fetchPost,
  fetchPostComments,
};
export default postService;
