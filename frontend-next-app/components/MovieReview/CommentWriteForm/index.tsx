"use client";

import { useState } from "react";
import styles from "./CommentWriteForm.module.css";
import { commentWrite } from "@/lib/api/comment";

export default function ReviewCommentWriteForm({
  reviewId,
}: {
  reviewId: number;
}) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newComment = {
      userId: 1, // todo. 임시 사용자로 설정한 1 대신, 실제 사용자의 userId를 설정합니다.
      content: comment,
      createdAt: new Date().toLocaleTimeString(), // ex) "2021-09-01 12:00:00"
    };
    commentWrite(reviewId, newComment); // 댓글 작성 요청
    setComment(""); // 댓글 작성 후, 입력창 초기화
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  return (
    <form className={styles.addCommentForm} onSubmit={handleSubmit}>
      <label htmlFor="new-comment">댓글 남기기:</label>
      <textarea
        id="new-comment"
        rows={2}
        placeholder="댓글을 입력하세요..."
        onChange={handleCommentChange}
      />
      <button type="submit">댓글 남기기</button>
    </form>
  );
}
