import { IPost, IComment } from '@/types/posts.types';

export interface IPostsState {
  posts: IPost[];
  loading: boolean;

  comments: IComment[];
  commentsLoading: boolean;
}
