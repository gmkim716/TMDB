package com.TMDB.backend.Review;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReviewDto {
  private Long id;
  private Long movieId;
  private String title;
  private String content;
  private Long userId;
  private Long categoryId;

  public ReviewDto(Review review) {
    this.id = review.getId();
    this.movieId = review.getMovieId();
    this.title = review.getTitle();
    this.content = review.getContent();
    this.userId = review.getUser().getId();
    this.categoryId = review.getCategoryId();
  }
}
