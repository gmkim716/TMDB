# Dev Memo

### React-query의 사용

데이터 리스트 컴포넌트와 데이터 폼 컴포넌트를 분리하는 과정에서 react-query의 필요성을 느꼈습니다.

```tsx
export default async function MovieDetailPage({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movieIdInt = parseInt(movieId);
  const movie = await getMovieDetail(movieIdInt);
  const initialReview = await getReviews(movieIdInt, 0, 5);

  return (
    <main>
      <MovieInfo
        title={movie.title}
        poster_path={movie.poster_path}
        genres={movie.genres}
        runtime={movie.runtime}
        popularity={movie.popularity}
        release_date={movie.release_date}
        vote_average={movie.vote_average}
        overview={movie.overview}
      />
      <MovieCast movieId={movieIdInt} />
      <MovieVideo movieId={movieIdInt} />
      <Review
        movieId={movieIdInt}
        initialReviews={initialReview.content}
        initialTotalPages={initialReview.totalPages}
      />
      {/* 고민 포인트. ReviewWriteForm은 review 컴포넌트에서 관리합니다? */}
      <ReviewWriteForm movieId={movieIdInt} />
    </main>
  );
}
```

- ReviewCommentList는 CommentItem을 나열하는 SSR 컴포넌트로 만들고 싶었습니다
- ReviewCommentWriteForm은 댓글을 추가하는 form 컴포넌트이며 CSR 컴포넌트로 만들었습니다

problem: 댓글을 추가했을 때, 추가된 댓글을 CommentList에서 확인하려면 CSR 컴포넌트 내 동작으로 SSR 컴포넌트에 페칭을 발생시켜야 했습니다.

- try: 댓글 리스트와 작성 폼을 관리하는 컴포넌트를 만들었지만, 이때의 부모 컴포넌트는 use 훅을 사용하는 CSR로 동작하게 됩니다. CSR 컴포넌트가 관리하는 자식 컴포넌트의 경우, 'use client'를 작성하지 않더라도 CSR로 동작하기 때문에, SSR의 이점을 살릴 수 없다고 생각해 옳지 않다 결론을 내렸습니다.

  ```tsx
  export default function ReviewCommentSection({
    reviewId,
  }: ReviewCommentSectionProps) {
    const [key, setKey] = useState(0); // 리스트를 강제로 리렌더링하기 위한 키

    ...

    return (
      <div>
        <ReviewCommentList reviewId={reviewId} key={key} />
        <ReviewCommentWriteForm
          reviewId={reviewId}
          onCommentAdded={handleCommentAdded}
        />
      </div>
    );
  }
  ```

---

- reviewWriteForm을 통해 데이터가 추가되면 reviewList에서 새롭게 값을 가져와?

- ChatGPT said:
  ChatGPT
  현재 구조에서는 ReviewWriteForm에서 데이터가 추가되었을 때 ReviewList에서 자동으로 새롭게 값을 가져오지 않습니다. 이 부분을 구현하려면 몇 가지 방법을 사용할 수 있습니다. 대표적으로 다음 두 가지 방법이 있습니다:

리뷰 리스트를 리프레시하는 방법: ReviewWriteForm에서 리뷰가 추가되었을 때 부모 컴포넌트 (Review)에서 ReviewList 컴포넌트를 리렌더링하도록 합니다. 이렇게 하면 ReviewList 컴포넌트가 다시 렌더링되면서 서버에서 최신 데이터를 가져오게 할 수 있습니다.

ReviewList 컴포넌트에서 클라이언트 측에서 데이터를 새로 가져오는 방법: ReviewWriteForm에서 리뷰가 추가되었을 때 ReviewList에서 클라이언트 측에서 데이터를 다시 가져오도록 하는 방법입니다.

방법 1: 리뷰 리스트를 리프레시하는 방법
이 방법에서는 ReviewWriteForm에서 새로운 리뷰가 추가될 때 Review 컴포넌트에서 ReviewList를 다시 렌더링하도록 구현합니다. 이를 위해 Review 컴포넌트에서 handleReviewAdded 함수를 구현하고, 이 함수를 ReviewWriteForm에 전달합니다.

Review 컴포넌트 수정
typescript
Copy code
import { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewWriteForm from "./ReviewWriteForm";
import { ReviewDto } from "@/types";
import { getReviews } from "@/lib/api/review";

interface ReviewProps {
movieId: number;
reviews: ReviewDto[];
totalPages: number;
}

export default function Review({ movieId, reviews, totalPages }: ReviewProps) {
const [currentReviews, setCurrentReviews] = useState(reviews);

const handleReviewAdded = async () => {
// 새롭게 리뷰 리스트를 가져옴
const updatedReviews = await getReviews(movieId, 0, 5); // 새로운 리뷰를 포함한 첫 페이지 리뷰를 가져옵니다.
setCurrentReviews(updatedReviews.content);
};

return (

<section id="reviews">
<h2>리뷰</h2>
<ReviewList reviews={currentReviews} />
<ReviewWriteForm movieId={movieId} onReviewAdded={handleReviewAdded} />
</section>
);
}
ReviewWriteForm 컴포넌트 수정
이전과 동일하게, onReviewAdded 콜백을 사용하여 부모 컴포넌트에 새로운 리뷰가 추가되었음을 알립니다.

typescript
Copy code
"use client";

import { useState } from "react";
import { postReview } from "@/lib/api/review";
import styles from "./ReviewPost.module.css";

interface ReviewWriteFormProps {
movieId: number;
onReviewAdded: () => void;
}

export default function ReviewWriteForm({
movieId,
onReviewAdded,
}: ReviewWriteFormProps) {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [rating, setRating] = useState("5");

const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();

    const newReview = {
      movieId,
      title,
      content,
      rating: parseInt(rating),
      userId: 1,
      username: "admin",
      categoryId: 2,
    };

    try {
      await postReview(newReview);
      onReviewAdded(); // 부모 컴포넌트에게 리뷰가 추가되었음을 알림
    } catch (error) {
      console.error("리뷰를 추가하는 중에 오류가 발생했습니다:", error);
    }

};

return (

<form className={styles.form} onSubmit={handleFormSubmit}>
<input
type="text"
placeholder="리뷰 제목"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<textarea
placeholder="리뷰 내용"
value={content}
onChange={(e) => setContent(e.target.value)}
/>
<select value={rating} onChange={(e) => setRating(e.target.value)}>
<option value="5">5점</option>
<option value="4">4점</option>
<option value="3">3점</option>
<option value="2">2점</option>
<option value="1">1점</option>
</select>
<button type="submit">리뷰 남기기</button>
</form>
);
}
이 방식은 리뷰 작성 후 getReviews를 다시 호출하여 리뷰 리스트를 새로고침하는 방식입니다.

방법 2: 클라이언트 측에서 데이터를 새로 가져오는 방법 (SWR 또는 React Query 사용)
이 방법에서는 클라이언트 측 데이터 페칭 라이브러리인 SWR이나 React Query를 사용하여, ReviewWriteForm에서 리뷰가 추가될 때 ReviewList가 자동으로 갱신되도록 할 수 있습니다. 이 방법은 클라이언트 측에서 동적으로 데이터를 관리하는 방식이므로 SSR과 함께 사용하기 위해서는 일부 설정이 필요합니다.

만약 이 방법에 대한 자세한 구현을 원하시면 말씀해 주세요. 해당 방법도 가능합니다.

- solution: react-query가 해결책이 될 수 있다고 판단하여 도입을 시도했습니다
