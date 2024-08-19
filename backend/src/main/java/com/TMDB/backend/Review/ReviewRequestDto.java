package com.TMDB.backend.Review;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReviewRequestDto {
  private Long movieId;
  private String title;
  private String content;
  private Long userId;
  private Long categoryId;
  private Integer rating;

  public ReviewRequestDto(Review review) {
    this.movieId = review.getMovieId();
    this.title = review.getTitle();
    this.content = review.getContent();
    this.userId = review.getId();
    this.categoryId = review.getCategoryId();
    this.rating = review.getRating();
  }
}
