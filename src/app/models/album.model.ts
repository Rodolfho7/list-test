export type AlbumModel = {
  id: number;
  userId: number;
  title: string;
}

export type NewAlbumModel = Omit<AlbumModel, 'id'>;
