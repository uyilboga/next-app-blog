import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '@/store/features/posts/posts.slice';
import thunk from 'redux-thunk';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
