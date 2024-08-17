const LOCAL_API = process.env.NEXT_PUBLIC_LOCAL_BACKEND_API;

async function fetchReviewList(movieId: number) {
  try {
    const response = await fetch(`${LOCAL_API}/api/post/list/movie/${movieId}`);
    if (!response.ok) {
      throw new Error("리뷰 목록을 불러오는데 실패했습니다.");
    }
    const reviews = await response.json();
    return reviews;
  } catch (error) {
    throw new Error("리뷰 목록을 불러오는데 실패했습니다.");
  }
}

export default async function getReviews(movieId: number) {
  return fetchReviewList(movieId);
}
