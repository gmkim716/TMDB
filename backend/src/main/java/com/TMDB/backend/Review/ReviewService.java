package com.TMDB.backend.Review;

import com.TMDB.backend.User.User;
import com.TMDB.backend.User.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewService {

  private final ReviewRepository reviewRepository;
  private final UserRepository userRepository;

  @Transactional(readOnly = true)
  public List<ReviewDto> reviewList() {
    List<Review> reviews = reviewRepository.findAll();
    return reviews.stream().map(ReviewDto::new).toList();
  }

  @Transactional(readOnly = true)
  public List<ReviewDto> reviewListByCategory(Long categoryId) {
    List<Review> reviews = reviewRepository.findByCategoryId(categoryId);
    return reviews.stream().map(ReviewDto::new).toList();
  }

  @Transactional(readOnly = true)
  public List<ReviewDto> reviewListByMovieId(Long movieId) {
    List<Review> reviews = reviewRepository.findByMovieId(movieId);
    return reviews.stream().map(ReviewDto::new).toList();
  }

  @Transactional(readOnly = true)
  public Page<ReviewDto> reviewListByMovieId(Long movieId, int page, int size) {
    Pageable pageable = PageRequest.of(page, size);
    Page<Review> reviews = reviewRepository.findByMovieIdOrderByCreatedAtDesc(movieId, pageable);
    return reviews.map(ReviewDto::new);
  }

  @Transactional
  public ReviewDto write(ReviewRequestDto reviewDto) {
    User user = userRepository.findById(reviewDto.getUserId())
      .orElseThrow(() -> new IllegalArgumentException(reviewDto.getUserId() + " 사용자가 존재하지 않습니다."));

    Review review = Review.builder()
      .movieId(reviewDto.getMovieId())
      .title(reviewDto.getTitle())
      .content(reviewDto.getContent())
      .rating(reviewDto.getRating())
      .user(user)
      .createdAt(LocalDateTime.now())
      .updatedAt(LocalDateTime.now())
      .status(ReviewStatus.ACTIVE)
      .categoryId(reviewDto.getCategoryId())
      .build();

    Review savedReview = reviewRepository.save(review);
    return new ReviewDto(savedReview);
  }

  @Transactional
  public void delete(Long reviewId) {
    try {
      reviewRepository.deleteById(reviewId);
    } catch (Exception e) {
      throw new IllegalArgumentException(reviewId + " 게시글 살제에 실패했습니다.");
    }
  }
}
