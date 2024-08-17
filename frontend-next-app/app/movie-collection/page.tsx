import React, { useState } from "react";
import styles from "./MovieCollection.module.css"; // CSS 모듈 파일 import

export default function MovieCollectionPage() {
  // const [activeFilter, setActiveFilter] = useState("story");

  // const filterMovies = (filter: string) => {
  //   setActiveFilter(filter);
  //   // 필터에 따른 영화 로드 로직 추가
  // };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/marvelous_logo.png" alt="Marvelous Times" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="/" className={styles.navLink}>
                  홈
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  영화 리뷰
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  평가하기
                </a>
              </li>
              <li>
                <a href="/characters" className={styles.navLink}>
                  캐릭터 소개
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  연락처
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.filterOptions}>
          <div className={styles.container}>
            <div className={styles.buttonGroup}>
              {/* <button
                className={`${styles.filterButton} ${
                  activeFilter === "story" ? styles.active : ""
                }`}
                onClick={() => filterMovies("story")}
              >
                스토리 흐름
              </button> */}
              {/* <button
                className={`${styles.filterButton} ${
                  activeFilter === "popularity" ? styles.active : ""
                }`}
                onClick={() => filterMovies("popularity")}
              >
                인기순
              </button> */}
              {/* <button
                className={`${styles.filterButton} ${
                  activeFilter === "genre" ? styles.active : ""
                }`}
                onClick={() => filterMovies("genre")}
              >
                장르별
              </button> */}
              {/* <button
                className={`${styles.filterButton} ${
                  activeFilter === "year" ? styles.active : ""
                }`}
                onClick={() => filterMovies("year")}
              >
                개봉연도별
              </button> */}
              {/* <button
                className={`${styles.filterButton} ${
                  activeFilter === "character" ? styles.active : ""
                }`}
                onClick={() => filterMovies("character")}
              >
                캐릭터별
              </button> */}
            </div>
          </div>
        </section>

        <section id="movie-collection" className={styles.movieCollection}>
          <div className={styles.container}>
            <h2>마블 영화 컬렉션</h2>
            <div id="movies">
              {/* 스토리 흐름에 따른 페이즈별 영화 목록이 여기에 동적으로 로드됩니다 */}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <p>&copy; 2024 Marvelous Times. All rights reserved.</p>
            <p>
              <a href="#">개인정보 처리방침</a> | <a href="#">이용약관</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
