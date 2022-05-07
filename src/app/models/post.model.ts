export type PostModel = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type NewPostModel = Omit<PostModel, 'id'>;
