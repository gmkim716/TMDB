"use client";

import { useState } from "react";
import styles from "./MovieReviewFilterOption.module.css";

export default function FilterOption() {
  const [activeRating, setActiveRating] = useState<string>("all");

  const ratings = ["all", "5", "4", "3", "2", "1"];

  const handleButton = (rating: string) => () => {
    setActiveRating(rating);
    console.log("rating", rating);
  };

  return (
    <div className={styles.filterOptions}>
      {ratings.map((rating) => (
        <button
          key={rating}
          className={`${styles.filterButton} ${
            activeRating === rating ? styles.active : ""
          }`}
          onClick={handleButton(rating)}
        >
          {rating === "all" ? "전체" : `${rating}점`}
        </button>
      ))}
    </div>
  );
}
