"use client";

import ReviewCommentItem from "./CommentItem";

interface ReviewCommentListProps {
  comments: CommentResponseDto[];
}

export default function ReviewCommentList({
  comments,
}: ReviewCommentListProps) {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <ReviewCommentItem comment={comment} />
        </div>
      ))}
    </div>
  );
}
