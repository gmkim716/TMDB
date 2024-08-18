import { useEffect, useState } from "react";
import styles from "./CommentList.module.css";
import { getComments } from "@/lib/api/comment";

interface ReviewCommentListProps {
  reviewId: number;
}

export default function ReviewCommentList({
  reviewId,
}: ReviewCommentListProps) {
  const [comments, setComments] = useState<CommentResponseDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(reviewId);
        setComments(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [reviewId]);

  return (
    <div className={styles.commentsSection}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <p>
            <strong>{comment.userId}:</strong> {comment.content}
          </p>
        </div>
      ))}
      <div className={styles.comment}>
        <p>
          <strong>사용자1:</strong> 댓글 내용 1
        </p>
      </div>
      <div className={styles.comment}>
        <p>
          <strong>사용자2:</strong> 댓글 내용 2
        </p>
      </div>
    </div>
  );
}
