"use client";

import { useState } from "react";
import styles from "./CommentWriteForm.module.css";
import useComment from "@/hooks/useComment";

interface ReviewCommentWriteFormProps {
  reviewId: number;
  onSubmit: () => void;
}

export default function ReviewCommentWriteForm({
  reviewId,
  onSubmit,
}: ReviewCommentWriteFormProps) {
  const { submitComment } = useComment(reviewId);

  const [comment, setComment] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitComment(comment, 1); // todo. 임시 사용자로 설정한 1 대신, 실제 사용자의 userId를 설정합니다.
    setComment("");
    onSubmit();
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  return (
    <form className={styles.addCommentForm} onSubmit={handleSubmit}>
      <textarea
        id="new-comment"
        rows={2}
        placeholder="댓글을 입력하세요..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button type="submit">댓글 남기기</button>
    </form>
  );
}
