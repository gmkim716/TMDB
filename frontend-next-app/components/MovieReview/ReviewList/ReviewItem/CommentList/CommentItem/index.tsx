import styles from "./CommentItem.module.css";

interface CommentItemProps {
  comment: CommentResponseDto;
}

export default function ReviewCommentItem({ comment }: CommentItemProps) {
  return (
    <div className={styles.comment}>
      <div>
        <strong>{comment.username}:</strong> {comment.content}
        <span>{comment.createdAt}</span>
      </div>
      <div>
        {/* 좋아요/싫어요 버튼 */}
        <button>좋아요</button>
        <span>0</span>
        <button>싫어요</button>
        <span>0</span>
      </div>
    </div>
  );
}
