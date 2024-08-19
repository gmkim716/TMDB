interface CommentDto {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
  username: string;
}

interface CommentWriteDto {
  content: string;
  userId: number;
}

interface CommentResponseDto {
  id: number;
  content: string;
  userId: number;
  username: string;
  createdAt: string;
}
