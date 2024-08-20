import styles from "./CommentItem.module.css";

interface CommentItemProps {
  comment: CommentResponseDto;
}

export default function ReviewCommentItem({ comment }: CommentItemProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <strong className={styles.username}>{comment.username}</strong>
        <span className={styles.createdAt}>{comment.createdAt}</span>
      </div>
      <div className={styles.commentFooter}>
        <span className={styles.content}>{comment.content}</span>
        <div className={styles.actions}>
          <button className={styles.likeButton}>좋아요</button>
          <span className={styles.likeCount}>0</span>
          <button className={styles.dislikeButton}>싫어요</button>
          <span className={styles.dislikeCount}>0</span>
        </div>
      </div>
    </div>
  );
}
