"use client";

import { useState } from "react";
import styles from "./ReviewPost.module.css";
import { postReview } from "@/lib/api/review";

interface ReviewPostProps {
  movieId: number;
}

export default function ReviewWriteForm({ movieId }: ReviewPostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("2");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("리뷰를 제출했습니다");

    const newReview = {
      movieId: movieId,
      title,
      content,
      rating: parseInt(rating),
      username: "test_username", // todo: username 추가
      categoryId: 2, // review category = 2
    };

    try {
      const response = await postReview(newReview);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      alert(
        "리뷰를 제출하는 중에 문제가 발생했습니다. 나중에 다시 시도해 주세요."
      );
    }
  };

  return (
    <section id="add-review" className={styles.addReview}>
      <div className={styles.container}>
        <h2 className={styles.title}>리뷰 작성하기</h2>
        <form
          id="review-form"
          className={styles.form}
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            id="review-title"
            name="title"
            placeholder="리뷰 제목 (선택 사항)"
            className={styles.input}
            onChange={handleTitleChange}
          />
          <textarea
            id="review-text"
            name="text"
            rows={4}
            required
            className={styles.textarea}
            placeholder="리뷰 내용"
            onChange={handleContentChange}
          />
          <select
            id="review-rating"
            name="rating"
            required
            className={styles.select}
            onChange={handleRatingChange}
          >
            <option value="5">5점</option>
            <option value="4">4점</option>
            <option value="3">3점</option>
            <option value="2">2점</option>
            <option value="1">1점</option>
          </select>

          <button type="submit" className={styles.button}>
            리뷰 남기기
          </button>
        </form>
      </div>
    </section>
  );
}
