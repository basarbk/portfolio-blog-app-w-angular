export type Page<T> = {
  content: T[];
  page: number;
  size: number;
  total: number;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  publishedAt: string | null;
  content: string;
  author: Author;
};

export type Author = {
  id: number;
  name: string;
  handle: string;
  image: string | null;
};

export type Reaction = 'like' | 'readingList' | 'hot';
