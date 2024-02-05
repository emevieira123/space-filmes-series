export interface Download {
  provedorName: string;
  linkDownload: string;
}

export interface Movies {
  name: string;
  description: string;
  bannerUrl: string;
  imageUrl: string;
  trailerUrl: string;
  categoryId: string;
  releaseYear: string;
  downloads: Download[];
}
