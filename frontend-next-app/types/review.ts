interface ReviewDto {
  id: number;
  movieId: number;
  title: string;
  content: string;
  userId: number;
  categoryId: number;
}

interface ReviewWriteDto {
  title: string;
  movieId: number;
  content: string;
  rating: number;
  userId: number;
  categoryId: number;
}

{
  "movieId": 0,
  "title": "string",
  "content": "string",
  "userId": 0,
  "categoryId": 0,
  "rating": 0
}