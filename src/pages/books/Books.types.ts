type RichTextChild = {
  type: "text";
  text: string;
};

type RichTextBlock = {
  type: "paragraph";
  children: RichTextChild[];
};

type Genre = {
  id: number;
  documentId: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Author = {
  id: number;
  documentId: string;
  firstname: string;
  surname: string;
  dateOfBirth: string;
  dateOfDeath: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Book = {
  id: number;
  documentId: string;
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Description: RichTextBlock[];
  genres: Genre[];
  author: Author;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Meta = {
  pagination: Pagination;
};

export type BooksApiResponse = {
  data: Book[];
  meta: Meta;
};
