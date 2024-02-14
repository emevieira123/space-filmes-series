import { Category } from "./category";

export interface Download {
  movieDownloadId?: string;
  provedorName: string;
  linkDownload: string;
}

export interface RequestMovie {
  movieId?: string;
  name: string;
  description: string;
  bannerUrl: string;
  imageUrl: string;
  trailerLink: string;
  releaseYear: string;
  categoryId: string;
  downloads: Download[];
}

export interface Movies {
  movieId?: string;
  name: string;
  description: string;
  bannerUrl: string;
  imageUrl: string;
  trailerLink: string;
  releaseYear: string;
  categories: Category;
  downloads: Download[];
}

export interface PayloadMovies {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  items: Movies[];
}
