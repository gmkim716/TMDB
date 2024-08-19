const LOCAL_API = process.env.NEXT_PUBLIC_LOCAL_BACKEND_API;

// 리뷰 목록을 불러오는 fetch 함수
async function fetchReviewList(movieId: number, page: number, size: number) {
  try {
    const response = await fetch(
      `${LOCAL_API}/api/review/list/movie/${movieId}?page=${page}&size=${size}`
    );
    if (!response.ok) {
      throw new Error("리뷰 목록을 불러오는데 실패했습니다.");
    }
    const reviews = await response.json();
    return reviews;
  } catch (error) {
    throw new Error("리뷰 목록을 불러오는데 실패했습니다.");
  }
}

// 리뷰를 추가하는 fetch 함수
async function fetchReviewWrite(review: ReviewWriteDto) {
  try {
    const response = await fetch(`${LOCAL_API}/api/review/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    if (!response.ok) {
      throw new Error("리뷰를 추가하는데 실패했습니다.");
    }
    return response.json();
  } catch (error) {
    console.error("fetchReviewWrite 에러 발생", error);
    throw new Error("리뷰를 추가하는데 실패했습니다.");
  }
}

export async function getReviews(movieId: number, page: number, size: number) {
  return fetchReviewList(movieId, page, size);
}

export async function postReview(review: ReviewWriteDto) {
  return fetchReviewWrite(review);
}
