async function fetchReviewList(movieId: number) {
  const response = await fetch(`localhost:3000/api/review?movieId=${movieId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch review list");
  }
  const reviews = await response.json();
  return reviews;
}
