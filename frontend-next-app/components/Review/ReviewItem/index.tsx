import styles from "./ReviewItem.module.css";

interface ReviewItemProps {
  title: string;
  content: string;
  username: string;
}

export default function ReviewItem({
  title,
  content,
  username,
}: ReviewItemProps) {
  return (
    <>
      <div className={styles.reviewItem}>
        <div className={styles.reviewHeader}>
          <div className={styles.userInfo}>
            <p>{username}</p>
          </div>
          <h3 className={styles.reviewTitle}>{title}</h3>
          <div className={styles.reviewActions}>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>

        <div className={styles.reviewBody}>
          <p>{content}</p>
        </div>

        <div className={styles.reviewFooter}>
          <button
            className={styles.toggleComments}
            // onclick="toggleComments(this)"
          >
            댓글 보기
          </button>
          <div className={styles.likesDislikes}>
            <button>좋아요</button>
            <span>15</span>
            <button>싫어요</button>
            <span>3</span>
          </div>
        </div>

        <div className={styles.commentsSection}>
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
          <form className={styles.addCommentForm}>
            <label htmlFor="new-comment">댓글 남기기:</label>
            <textarea
              id="new-comment"
              rows={2}
              placeholder="댓글을 입력하세요..."
            />
            <button type="submit">댓글 남기기</button>
          </form>
        </div>
      </div>
    </>
  );
}
