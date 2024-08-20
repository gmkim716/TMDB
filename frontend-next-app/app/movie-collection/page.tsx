import styles from "./MovieCollection.module.css"; // CSS 모듈 파일 import
import Image from "next/image";

export default function MovieCollectionPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/marvelous_logo.png" alt="Marvel Chronicles" />
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
              {/* 필터 버튼들 여기에 위치 */}
            </div>
          </div>
        </section>

        <section id="map-placeholder" className={styles.mapPlaceholder}>
          <div className={styles.container}>
            <h2>지도 영역</h2>
            <p>이 영역에 지도가 표시될 예정입니다.</p>
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
            <p>&copy; 2024 Marvel Chronicles. All rights reserved.</p>
            <p>
              <a href="#">개인정보 처리방침</a> | <a href="#">이용약관</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
