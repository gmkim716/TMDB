package com.TMDB.backend.Comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
  List<Comment> findCommentsByReviewIdOrderByCreatedAtDesc(Long reviewId);
}
