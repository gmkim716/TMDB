package com.TMDB.backend.Like;

import com.TMDB.backend.Comment.Comment;
import com.TMDB.backend.Review.Review;
import com.TMDB.backend.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
  boolean existsByUserAndReview(User user, Review review);
  boolean existsByUserAndComment(User user, Comment comment);
  Optional<Like> findByUserAndReview(User user, Review review);
  Optional<Like> findByUserAndComment(User user, Comment comment);
}
