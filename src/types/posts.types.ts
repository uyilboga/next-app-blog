export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: string;
}

export interface IComment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}
