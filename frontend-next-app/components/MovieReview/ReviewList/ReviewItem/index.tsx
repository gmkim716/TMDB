"use client";

import { useEffect, useState } from "react";
import styles from "./ReviewItem.module.css";
import ReviewCommentList from "./CommentList";
import ReviewCommentWriteForm from "../../CommentWriteForm";
import useComment from "@/hooks/useComment";

interface ReviewItemProps {
  reviewId: number;
  title: string;
  content: string;
  username: string;
}

export default function ReviewItem({
  reviewId,
  title,
  content,
  username,
}: ReviewItemProps) {
  const [commentVisible, setCommentVisible] = useState(false);

  const toggleComments = () => {
    setCommentVisible(!commentVisible);
  };

  const { comments, fetchComments } = useComment(reviewId);

  useEffect(() => {
    fetchComments();
  }, [reviewId]);

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
          <button className={styles.toggleComments} onClick={toggleComments}>
            {!commentVisible ? "댓글 보기" : "댓글 숨기기"}
          </button>
          <div className={styles.likesDislikes}>
            <button>좋아요</button>
            <span>15</span>
            <button>싫어요</button>
            <span>3</span>
          </div>
        </div>

        {/* 댓글 섹션 */}
        {commentVisible && (
          <div className={styles.commentsSection}>
            <ReviewCommentList comments={comments} />
            <ReviewCommentWriteForm
              reviewId={reviewId}
              onSubmit={() => {
                fetchComments(); // 댓글 작성 후 댓글 목록을 갱신합니다.
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
