"use client";

import { ChangeEvent } from "react";
import styles from "./MovieReviewDisplayOption.module.css";

interface MovieReviewDisplayOptionProps {
  reviewsPerPage: string;
  setReviewsPerPage: (value: string) => void;
}

export default function MovieReviewDisplayOption({
  reviewsPerPage,
  setReviewsPerPage,
}: MovieReviewDisplayOptionProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("handleChange", e.target.value);
    setReviewsPerPage(e.target.value);
  };

  return (
    <div className={styles.paginationOptions}>
      <label htmlFor="reviewsPerPage">보기:</label>
      <select
        id="reviewsPerPage"
        value={reviewsPerPage}
        onChange={handleChange}
      >
        <option value="scroll">스크롤</option>
        <option value="3">3개</option>
        <option value="5">5개</option>
        <option value="10">10개</option>
        <option value="-1">전체</option>
      </select>
    </div>
  );
}
