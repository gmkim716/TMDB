import { commentWrite, getComments } from "@/lib/api/comment";
import { useEffect, useState, useCallback } from "react";

export default function useComment(reviewId: number) {
  const [comments, setComments] = useState<CommentResponseDto[]>([]);

  const fetchComments = useCallback(async () => {
    try {
      const comments = await getComments(reviewId);
      setComments(comments);
    } catch (error) {
      console.error("리뷰 데이터를 조회하는데 실패했습니다.", error);
    }
  }, [reviewId]);

  useEffect(() => {
    fetchComments(); // 댓글 목록을 불러옵니다.
  }, [reviewId]);

  const submitComment = useCallback(
    async (content: string, userId: number) => {
      try {
        const newComment = {
          content,
          userId,
        };
        await commentWrite(reviewId, newComment);
        await fetchComments(); // 댓글 작성 후에 댓글 목록을 다시 불러옵니다.
      } catch (error) {
        console.error("댓글 작성에 실패했습니다.", error);
      }
    },
    [reviewId, fetchComments]
  );

  return {
    comments,
    fetchComments,
    submitComment,
  };
}
