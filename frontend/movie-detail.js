// TMDB API를 사용하여 영화 정보 불러오기
const API_KEY = "YOUR_TMDB_API_KEY";
const MOVIE_ID = "YOUR_MOVIE_ID";
let currentPage = 1;
let reviewsPerPage = 5;
let filteredReviews = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchMovieDetails();
  fetchYoutubeVideos();
  fetchCast();
  loadReviews();
});

async function fetchMovieDetails() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=ko`
  );
  const movie = await response.json();

  const movieInfoContainer = document.querySelector("#movie-info .container");
  movieInfoContainer.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <div class="movie-info-details">
            <h1>${movie.title}</h1>
            <p><strong>개봉일:</strong> ${movie.release_date}</p>
            <p><strong>평점:</strong> ${movie.vote_average}</p>
            <p><strong>줄거리:</strong> ${movie.overview}</p>
        </div>
    `;
}

async function fetchYoutubeVideos() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}&language=ko`
  );
  const data = await response.json();
  const videos = data.results.filter((video) => video.site === "YouTube");

  const videoList = document.getElementById("video-list");
  videoList.innerHTML = videos
    .map(
      (video) => `
        <iframe src="https://www.youtube.com/embed/${video.key}" frameborder="0" allowfullscreen></iframe>
    `
    )
    .join("");
}

async function fetchCast() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&language=ko`
  );
  const data = await response.json();
  const cast = data.cast.slice(0, 10); // 상위 10명의 출연진만 표시

  const castList = document.getElementById("cast-list");
  castList.innerHTML = cast
    .map(
      (member) => `
        <div class="cast-member">
            <img src="https://image.tmdb.org/t/p/w500${member.profile_path}" alt="${member.name}">
            <p>${member.name}</p>
            <p>(${member.character})</p>
        </div>
    `
    )
    .join("");
}

// 리뷰 데이터를 로컬에서 관리하기 위한 더미 데이터
let reviews = [
  {
    profile: "user1.jpg",
    username: "John Doe",
    date: "2023-08-12",
    rating: 5,
    title: "정말 훌륭한 영화!",
    text: "정말 훌륭한 영화였어요!",
    likes: 10,
    dislikes: 2,
    comments: 3,
  },
  {
    profile: "user2.jpg",
    username: "Jane Doe",
    date: "2023-08-13",
    rating: 4,
    title: "",
    text: "재밌게 봤습니다. 추천해요.",
    likes: 7,
    dislikes: 0,
    comments: 1,
  },
  {
    profile: "user3.jpg",
    username: "Alice",
    date: "2023-08-14",
    rating: 3,
    title: "",
    text: "나쁘지 않았지만, 조금 아쉬웠어요.",
    likes: 4,
    dislikes: 1,
    comments: 2,
  },
  {
    profile: "user4.jpg",
    username: "Bob",
    date: "2023-08-15",
    rating: 2,
    title: "아쉬움이 남아요.",
    text: "기대에 미치지 못했어요.",
    likes: 3,
    dislikes: 3,
    comments: 0,
  },
  {
    profile: "user5.jpg",
    username: "Charlie",
    date: "2023-08-16",
    rating: 1,
    title: "",
    text: "별로였어요.",
    likes: 1,
    dislikes: 4,
    comments: 0,
  },
];

function loadReviews() {
  filteredReviews = reviews; // 초기화
  renderReviews();
}

function renderReviews() {
  const reviewList = document.getElementById("review-list");
  const start = (currentPage - 1) * reviewsPerPage;
  const end = start + reviewsPerPage;
  const paginatedReviews = filteredReviews.slice(start, end);

  reviewList.innerHTML = paginatedReviews
    .map(
      (review) => `
        <div class="review-item">
            <div class="review-header">
                <div class="user-info">
                    <img src="${review.profile}" alt="${review.username}">
                    <div>
                        <p>${review.username}</p>
                        <p class="review-time" data-time="${
                          review.date
                        }">${timeAgo(review.date)}</p>
                    </div>
                </div>
                <div class="review-actions">
                    <button onclick="editReview(${
                      start + filteredReviews.indexOf(review)
                    })">수정</button>
                    <button onclick="deleteReview(${
                      start + filteredReviews.indexOf(review)
                    })">삭제</button>
                </div>
            </div>
            <div class="review-body">
                <h3>${review.title || "제목 없음"}</h3>
                <p>${review.text}</p>
            </div>
            <div class="review-footer">
                <button class="toggle-comments" onclick="commentOnReview(${
                  start + filteredReviews.indexOf(review)
                })">
                    댓글 보기
                </button>
                <div class="likes-dislikes">
                    <button onclick="likeReview(${
                      start + filteredReviews.indexOf(review)
                    })">👍</button>
                    <span>${review.likes}</span>
                    <button onclick="dislikeReview(${
                      start + filteredReviews.indexOf(review)
                    })">👎</button>
                    <span>${review.dislikes}</span>
                </div>
            </div>
            <div class="comments-section" style="display: none;">
                <!-- 댓글 리스트가 여기에 표시됩니다 -->
                <div class="comment">
                    <p><strong>사용자1:</strong> 댓글 내용 1</p>
                </div>
                <div class="comment">
                    <p><strong>사용자2:</strong> 댓글 내용 2</p>
                </div>
                <form class="add-comment-form">
                    <label for="new-comment">댓글 남기기:</label>
                    <textarea id="new-comment" rows="2" placeholder="댓글을 입력하세요..."></textarea>
                    <button type="submit">댓글 남기기</button>
                </form>
            </div>
        </div>
    `
    )
    .join("");

  document.getElementById("current-page").textContent = currentPage;
  document.getElementById("total-pages").textContent = Math.ceil(
    filteredReviews.length / reviewsPerPage
  );
}

function filterReviews(rating) {
  if (rating === "all") {
    filteredReviews = reviews;
  } else {
    filteredReviews = reviews.filter((review) => review.rating === rating);
  }
  currentPage = 1;
  renderReviews();
}

function setReviewsPerPage() {
  reviewsPerPage = parseInt(document.getElementById("reviews-per-page").value);
  currentPage = 1;
  renderReviews();
}

function nextPage() {
  if (currentPage < Math.ceil(filteredReviews.length / reviewsPerPage)) {
    currentPage++;
    renderReviews();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderReviews();
  }
}

function likeReview(index) {
  reviews[index].likes++;
  renderReviews();
}

function dislikeReview(index) {
  reviews[index].dislikes++;
  renderReviews();
}

function commentOnReview(index) {
  const reviewItem = document.querySelectorAll(".review-item")[index];
  const commentsSection = reviewItem.querySelector(".comments-section");

  if (
    commentsSection.style.display === "none" ||
    commentsSection.style.display === ""
  ) {
    commentsSection.style.display = "block";
    reviewItem.querySelector(".toggle-comments").textContent = "댓글 숨기기";
  } else {
    commentsSection.style.display = "none";
    reviewItem.querySelector(".toggle-comments").textContent = "댓글 보기";
  }
}

function editReview(index) {
  const newText = prompt("리뷰를 수정하세요:", reviews[index].text);
  if (newText !== null) {
    reviews[index].text = newText;
    renderReviews();
  }
}

function deleteReview(index) {
  if (confirm("정말 이 리뷰를 삭제하시겠습니까?")) {
    reviews.splice(index, 1);
    renderReviews();
  }
}

function isReviewOwner(review) {
  // 현재 사용자가 리뷰 작성자인지 확인하는 로직
  return true; // 예시로 모든 리뷰에 대해 수정/삭제/싫어요 권한 부여
}

function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 86400);

  if (interval > 7) {
    return new Date(date).toLocaleDateString(); // 7일 이상이면 날짜로 표시
  }

  if (interval >= 1) return interval + "일 전";
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval + "시간 전";
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval + "분 전";
  return Math.floor(seconds) + "초 전";
}

// 리뷰 작성 폼 처리
document.getElementById("review-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("review-title").value;
  const rating = parseInt(document.getElementById("review-rating").value);
  const text = document.getElementById("review-text").value;
  const newReview = {
    profile: "user_default.jpg",
    username: "사용자",
    date: new Date().toISOString().split("T")[0],
    rating,
    title,
    text,
    likes: 0,
    dislikes: 0,
    comments: 0,
  };
  reviews.push(newReview);
  filterReviews("all");
  this.reset();
});

// 예제: 댓글 작성 시간을 상대 시간 형식으로 표시
document.querySelectorAll(".review-time").forEach(function (element) {
  const date = element.getAttribute("data-time");
  element.textContent = timeAgo(date);
});
