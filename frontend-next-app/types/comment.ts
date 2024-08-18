interface CommentDto {
  content: string;
  userId: number;
  createdAt: string;
}

interface CommentWriteDto {
  content: string;
  userId: number;
}

interface CommentResponseDto {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
}
