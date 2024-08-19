package com.TMDB.backend.Like;

import com.TMDB.backend.Comment.Comment;
import com.TMDB.backend.Comment.CommentRepository;
import com.TMDB.backend.Review.Review;
import com.TMDB.backend.Review.ReviewRepository;
import com.TMDB.backend.User.User;
import com.TMDB.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class LikeService {

  private final LikeRepository likeRepository;
  private final UserRepository userRepository;
  private final ReviewRepository reviewRepository;
  private final CommentRepository commentRepository;

  @Transactional
  public void likeReview(Long userId, Long reviewId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

    boolean alreadyLiked = likeRepository.existsByUserAndReview(user, review);
    if (alreadyLiked) {
      throw new IllegalArgumentException("이미 좋아요를 누른 게시글입니다.");
    }

    Like like = Like.builder()
      .user(user)
      .review(review)
      .createdAt(LocalDateTime.now())
      .build();
    likeRepository.save(like);
  }

  @Transactional
  public void unlikeReview(Long userId, Long reviewId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
    Like like = likeRepository.findByUserAndReview(user, review).orElseThrow(() -> new IllegalArgumentException("해당 좋아요가 없습니다."));

    likeRepository.delete(like);
  }

  @Transactional
  public void likeComment(Long userId, Long commentId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다."));

    boolean alreadyLiked = likeRepository.existsByUserAndComment(user, comment);
    if (alreadyLiked) {
      throw new IllegalArgumentException("이미 좋아요를 누른 댓글입니다.");
    }

    Like like = Like.builder()
      .user(user)
      .comment(comment)
      .createdAt(LocalDateTime.now())
      .build();

    likeRepository.save(like);
  }

  @Transactional
  public void unLikeComment(Long userId, Long commentId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다."));
    Like like = likeRepository.findByUserAndComment(user, comment).orElseThrow(() -> new IllegalArgumentException("해당 좋아요가 없습니다."));

    likeRepository.delete(like);
  }
}
