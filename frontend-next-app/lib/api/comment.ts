const LOCAL_API = process.env.NEXT_PUBLIC_LOCAL_BACKEND_API;

async function fetchComments(reviewId: number) {
  try {
    const response = await fetch(`${LOCAL_API}/api/comment/list/${reviewId}`);
    if (!response.ok) {
      throw new Error("댓글 목록을 불러오는데 실패했습니다.");
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    throw new Error("댓글 목록을 불러오는데 실패했습니다.");
  }
}

async function fetchCommentWrite(
  reviewId: number,
  newComment: CommentWriteDto
) {
  try {
    const response = await fetch(`${LOCAL_API}/api/comment/write/${reviewId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    if (!response.ok) {
      throw new Error("댓글 작성에 실패했습니다.");
    }
    return true;
  } catch (error) {
    throw new Error("댓글 작성에 실패했습니다.");
  }
}

export async function getComments(reviewId: number) {
  return await fetchComments(reviewId);
}

export async function commentWrite(
  reviewId: number,
  newComment: CommentWriteDto
) {
  return await fetchCommentWrite(reviewId, newComment);
}
