package com.TMDB.backend.Comment;

import com.TMDB.backend.Review.Review;
import com.TMDB.backend.Review.ReviewRepository;
import com.TMDB.backend.User.User;
import com.TMDB.backend.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

  private final CommentRepository commentRepository;
  private final ReviewRepository reviewRepository;
  private final UserRepository userRepository;

  @Transactional(readOnly = true)
  public List<CommentResponseDto> getCommentsByReviewId(Long reviewId) {
    List<Comment> comments = commentRepository.findCommentsByReviewIdOrderByCreatedAtDesc(reviewId);
    return comments.stream().map(CommentResponseDto::new).toList();
  }

  @Transactional
  public CommentResponseDto writeComment(Long reviewId, CommentWriteDto registerDto) {
    Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new IllegalArgumentException("게시글이 존재하지 않습니다."));
    User user = userRepository.findById(registerDto.getUserId()).orElseThrow(() -> new IllegalArgumentException("사용자가 존재하지 않습니다."));

    Comment comment = Comment.builder()
      .content(registerDto.getContent())
      .review(review)
      .user(user)
      .createdAt(LocalDateTime.now())
      .status(CommentStatus.ACTIVE)
      .build();
    Comment savedComment = commentRepository.save(comment);
    return new CommentResponseDto(savedComment);
  }

}
