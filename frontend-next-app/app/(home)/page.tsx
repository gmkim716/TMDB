import styles from "./HomePage.module.css"; // CSS 모듈 import

export default function HomePage() {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1>The Marvel Chronicles</h1>
              <p>최신 마블 영화와 최고의 평가를 받은 영화를 만나보세요</p>
              <a href="#" className={styles.ctaButton}>
                지금 탐색하기
              </a>
            </div>
          </div>
        </section>

        <section className={styles.latestMovies}>
          <div className={styles.container}>
            <h2>최신 마블 영화</h2>
            <div className={styles.movieGrid}>
              <div className={styles.movieCard}>
                <img src="/movie1.jpg" alt="Movie 1" />
                <div className={styles.movieInfo}>
                  <h3>어벤져스: 엔드게임</h3>
                  <p>개봉일: 2019년 4월 26일</p>
                </div>
              </div>
              <div className={styles.movieCard}>
                <img src="/movie2.jpg" alt="Movie 2" />
                <div className={styles.movieInfo}>
                  <h3>스파이더맨: 노 웨이 홈</h3>
                  <p>개봉일: 2021년 12월 17일</p>
                </div>
              </div>
              <div className={styles.movieCard}>
                <img src="/movie3.jpg" alt="Movie 3" />
                <div className={styles.movieInfo}>
                  <h3>블랙 팬서: 와칸다 포에버</h3>
                  <p>개봉일: 2022년 11월 11일</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.topRatedMovies}>
          <div className={styles.container}>
            <h2>가장 평가가 좋은 영화</h2>
            <div className={styles.movieList}>
              <div className={styles.movieListItem}>
                <img src="/movie4.jpg" alt="Movie 4" />
                <div className={styles.movieInfo}>
                  <h3>아이언맨</h3>
                  <p>평균 평점: 4.8/5</p>
                </div>
              </div>
              <div className={styles.movieListItem}>
                <img src="/movie5.jpg" alt="Movie 5" />
                <div className={styles.movieInfo}>
                  <h3>어벤져스: 인피니티 워</h3>
                  <p>평균 평점: 4.7/5</p>
                </div>
              </div>
              <div className={styles.movieListItem}>
                <img src="/movie6.jpg" alt="Movie 6" />
                <div className={styles.movieInfo}>
                  <h3>토르: 라그나로크</h3>
                  <p>평균 평점: 4.6/5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.popularMovies}>
          <div className={styles.container}>
            <h2>인기 영화 차트</h2>
            <div className={styles.movieChart}>
              <div className={styles.movieChartItem}>
                <img src="/movie7.jpg" alt="Movie 7" />
                <div className={styles.movieInfo}>
                  <h3>캡틴 아메리카: 시빌 워</h3>
                  <p>좋아요: 150만</p>
                </div>
              </div>
              <div className={styles.movieChartItem}>
                <img src="/movie8.jpg" alt="Movie 8" />
                <div className={styles.movieInfo}>
                  <h3>블랙 팬서</h3>
                  <p>좋아요: 140만</p>
                </div>
              </div>
              <div className={styles.movieChartItem}>
                <img src="/movie9.jpg" alt="Movie 9" />
                <div className={styles.movieInfo}>
                  <h3>가디언즈 오브 갤럭시</h3>
                  <p>좋아요: 130만</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.marvelNews}>
          <div className={styles.container}>
            <h2>마블 뉴스 & 업데이트</h2>
            <div className={styles.newsList}>
              <div className={styles.newsItem}>
                <img src="/news1.jpg" alt="News 1" />
                <div className={styles.newsContent}>
                  <h3>마블 유니버스의 새로운 확장 계획 발표</h3>
                  <p>
                    마블 스튜디오가 2024년 이후의 영화와 시리즈에 대한 계획을
                    발표했습니다...
                  </p>
                  <a href="#" className={styles.readMore}>
                    더 읽기
                  </a>
                </div>
              </div>
              <div className={styles.newsItem}>
                <img src="/news2.jpg" alt="News 2" />
                <div className={styles.newsContent}>
                  <h3>마블 캐릭터를 연기하는 배우들의 인터뷰</h3>
                  <p>
                    최근 개봉한 마블 영화에서 주요 캐릭터를 연기한 배우들과의
                    인터뷰...
                  </p>
                  <a href="#" className={styles.readMore}>
                    더 읽기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.youtuberReviews}>
          <div className={styles.container}>
            <h2>유명 유튜버들의 마블 영화 리뷰</h2>
            <div className={styles.youtuberList}>
              <div className={styles.youtuberItem}>
                <div className={styles.youtuberThumbnail}>
                  <img src="/youtuber1.jpg" alt="Youtuber 1" />
                </div>
                <div className={styles.youtuberContent}>
                  <h3>무비 박사</h3>
                  <p>"어벤져스: 엔드게임은 그야말로 마블의 걸작이다."</p>
                </div>
              </div>
              <div className={styles.youtuberItem}>
                <div className={styles.youtuberThumbnail}>
                  <img src="/youtuber2.jpg" alt="Youtuber 2" />
                </div>
                <div className={styles.youtuberContent}>
                  <h3>시네마천국</h3>
                  <p>
                    "닥터 스트레인지: 대혼돈의 멀티버스는 시각적 매력이
                    뛰어나다."
                  </p>
                </div>
              </div>
              <div className={styles.youtuberItem}>
                <div className={styles.youtuberThumbnail}>
                  <img src="/youtuber3.jpg" alt="Youtuber 3" />
                </div>
                <div className={styles.youtuberContent}>
                  <h3>영화광팬</h3>
                  <p>"스파이더맨: 노 웨이 홈은 놀라운 반전이 가득하다."</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
