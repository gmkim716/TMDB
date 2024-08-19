package com.TMDB.backend.Review;

import com.TMDB.backend.dto.Response;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/review")
public class ReviewController {

  private static final Logger log = LoggerFactory.getLogger(ReviewController.class);
  private final ReviewService reviewService;

  @GetMapping("/list")
  public ResponseEntity<List<ReviewDto>> reviewList() {
    List<ReviewDto> reviews = reviewService.reviewList();
    return ResponseEntity.ok(reviews);
  }

  @GetMapping("/list/category/{categoryId}")
  public ResponseEntity<List<ReviewDto>> reviewListByCategory(@PathVariable Long categoryId) {
    List<ReviewDto> reviews = reviewService.reviewListByCategory(categoryId);
    return ResponseEntity.ok(reviews);
  }

  @GetMapping("/list/movie/{movieId}")
  public ResponseEntity<?> reviewListByMovieId(
    @PathVariable Long movieId,
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size) {
    if (size == -1) {  // 전체 리스트 보기  // todo: scroll, all에 대한 처리 추가 필요
      List<ReviewDto> reviews = reviewService.reviewListByMovieId(movieId);
      return ResponseEntity.ok(reviews);
    }
    Page<ReviewDto> reviews = reviewService.reviewListByMovieId(movieId, page, size);
    return ResponseEntity.ok(reviews);
  }

  @PostMapping("/write")
  public ResponseEntity<ReviewDto> write(@RequestBody @Valid ReviewRequestDto reviewDto) {
    ReviewDto createdReview = reviewService.write(reviewDto);
    return ResponseEntity.status(201).body(createdReview);
  }

  @DeleteMapping("/{reviewId}")
  public ResponseEntity<Response> delete(@PathVariable Long reviewId) {
    reviewService.delete(reviewId);
    return ResponseEntity.ok(new Response("success", "게시글 삭제 완료"));
  }
}
