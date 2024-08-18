"use client";

import styles from "./MovieReviewPaginationControl.module.css";

export default function PaginationControl({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) {
  const handlePrevButton = () => {
    console.log("prevPage");
  };

  const handleNextButton = () => {
    console.log("nextPage");
  };

  return (
    <div className={styles.paginationControls}>
      <button id="prev-page" onClick={handlePrevButton}>
        이전
      </button>
      <span id="current-page">{currentPage + 1}</span> /{" "}
      <span id="total-pages">{totalPage + 1}</span>
      <button id="next-page" onClick={handleNextButton}>
        다음
      </button>
    </div>
  );
}
