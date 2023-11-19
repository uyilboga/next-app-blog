import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPostsState } from '@/store/features/posts/posts.types';
import postService from '@/services/posts.service';
import { IComment, IPost } from '@/types/posts.types';

export const fetchPosts = createAsyncThunk('intro-posts/fetchPosts', async (_, thunkAPI) => {
  const response = await postService.fetchPosts();
  if (response.status === 'success') {
    return response.data as IPost[];
  }

  return thunkAPI.rejectWithValue('bir hata oluştu');
});

export const fetchPostComments = createAsyncThunk('intro-posts/fetchPostComments', async (postId: number, thunkAPI) => {
  const response = await postService.fetchPostComments(postId);
  if (response.status === 'success') {
    return response.data as IComment[];
  }

  return thunkAPI.rejectWithValue('bir hata oluştu');
});

const initialState: IPostsState = {
  posts: [],
  loading: false,

  comments: [],
  commentsLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IPostsState>) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(fetchPostComments.pending, (state) => {
        state.commentsLoading = true;
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.commentsLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchPostComments.rejected, (state) => {
        state.commentsLoading = false;
      });
  },
});

export default postsSlice.reducer;
