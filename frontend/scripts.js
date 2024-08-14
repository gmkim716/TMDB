// 더미 데이터: 마블 영화 목록
const moviesData = [
  {
    title: "블랙 위도우",
    phase: "Phase 4",
    year: 2021,
    genre: "액션",
    character: "블랙 위도우",
    popularity: 4.5,
    img: "black_widow.jpg",
  },
  {
    title: "샹치와 텐 링즈의 전설",
    phase: "Phase 4",
    year: 2021,
    genre: "액션",
    character: "샹치",
    popularity: 4.7,
    img: "shang_chi.jpg",
  },
  {
    title: "이터널스",
    phase: "Phase 4",
    year: 2021,
    genre: "SF",
    character: "이터널스",
    popularity: 4.0,
    img: "eternals.jpg",
  },
  {
    title: "스파이더맨: 노 웨이 홈",
    phase: "Phase 4",
    year: 2021,
    genre: "액션",
    character: "스파이더맨",
    popularity: 4.8,
    img: "spiderman_no_way_home.jpg",
  },
  {
    title: "닥터 스트레인지: 대혼돈의 멀티버스",
    phase: "Phase 4",
    year: 2022,
    genre: "판타지",
    character: "닥터 스트레인지",
    popularity: 4.6,
    img: "doctor_strange_multiverse.jpg",
  },
  {
    title: "토르: 러브 앤 썬더",
    phase: "Phase 4",
    year: 2022,
    genre: "판타지",
    character: "토르",
    popularity: 4.2,
    img: "thor_love_and_thunder.jpg",
  },
  {
    title: "캡틴 아메리카: 시빌 워",
    phase: "Phase 3",
    year: 2016,
    genre: "액션",
    character: "캡틴 아메리카",
    popularity: 4.7,
    img: "captain_america_civil_war.jpg",
  },
  {
    title: "닥터 스트레인지",
    phase: "Phase 3",
    year: 2016,
    genre: "판타지",
    character: "닥터 스트레인지",
    popularity: 4.4,
    img: "doctor_strange.jpg",
  },
  {
    title: "가디언즈 오브 갤럭시 Vol. 2",
    phase: "Phase 3",
    year: 2017,
    genre: "SF",
    character: "가디언즈 오브 갤럭시",
    popularity: 4.3,
    img: "guardians_of_the_galaxy_2.jpg",
  },
  {
    title: "스파이더맨: 홈커밍",
    phase: "Phase 3",
    year: 2017,
    genre: "액션",
    character: "스파이더맨",
    popularity: 4.6,
    img: "spiderman_homecoming.jpg",
  },
  {
    title: "토르: 라그나로크",
    phase: "Phase 3",
    year: 2017,
    genre: "판타지",
    character: "토르",
    popularity: 4.5,
    img: "thor_ragnarok.jpg",
  },
  {
    title: "블랙 팬서",
    phase: "Phase 3",
    year: 2018,
    genre: "액션",
    character: "블랙 팬서",
    popularity: 4.9,
    img: "black_panther.jpg",
  },
  {
    title: "아이언맨",
    phase: "Phase 1",
    year: 2008,
    genre: "액션",
    character: "아이언맨",
    popularity: 4.9,
    img: "ironman1.jpg",
  },
  {
    title: "인크레더블 헐크",
    phase: "Phase 1",
    year: 2008,
    genre: "액션",
    character: "헐크",
    popularity: 3.9,
    img: "hulk.jpg",
  },
  {
    title: "아이언맨 2",
    phase: "Phase 1",
    year: 2010,
    genre: "액션",
    character: "아이언맨",
    popularity: 4.1,
    img: "ironman2.jpg",
  },
  {
    title: "토르: 천둥의 신",
    phase: "Phase 1",
    year: 2011,
    genre: "판타지",
    character: "토르",
    popularity: 4.0,
    img: "thor.jpg",
  },
  {
    title: "캡틴 아메리카: 퍼스트 어벤저",
    phase: "Phase 1",
    year: 2011,
    genre: "액션",
    character: "캡틴 아메리카",
    popularity: 4.3,
    img: "captainamerica.jpg",
  },
  {
    title: "어벤져스",
    phase: "Phase 1",
    year: 2012,
    genre: "액션",
    character: "어벤져스",
    popularity: 5.0,
    img: "avengers1.jpg",
  },
];

// 영화 목록을 페이즈별로 그룹화
const groupedMovies = moviesData.reduce((acc, movie) => {
  if (!acc[movie.phase]) {
    acc[movie.phase] = [];
  }
  acc[movie.phase].push(movie);
  return acc;
}, {});

// 영화 목록 필터링 및 렌더링
function filterMovies(category) {
  const moviesContainer = document.getElementById("movies");
  const buttons = document.querySelectorAll(".filter-button");

  // 모든 버튼의 활성화 상태 초기화
  buttons.forEach((button) => button.classList.remove("active"));

  // 클릭된 버튼에 활성화 상태 부여
  document
    .querySelector(`.filter-button[onclick="filterMovies('${category}')"]`)
    .classList.add("active");

  moviesContainer.innerHTML = ""; // 기존 영화 목록 제거

  if (category === "story") {
    // 페이즈별로 영화 목록 생성
    Object.keys(groupedMovies)
      .sort((a, b) => b.localeCompare(a))
      .forEach((phase) => {
        const phaseElement = document.createElement("div");
        phaseElement.classList.add("phase");
        phaseElement.innerHTML = `
              <h3>${phase}</h3>
              <div class="movie-slider">
                  ${groupedMovies[phase]
                    .map(
                      (movie) => `
                      <div class="movie-poster">
                          <img src="${movie.img}" alt="${movie.title}">
                          <p>${movie.title} (${movie.year})</p>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          `;
        moviesContainer.appendChild(phaseElement);
      });
  } else {
    // 다른 필터링 로직 추가 (예: 인기순, 장르별 등)
  }
}

// 페이지 로드 시 기본적으로 스토리 흐름에 따라 영화 목록 표시
filterMovies("story");
