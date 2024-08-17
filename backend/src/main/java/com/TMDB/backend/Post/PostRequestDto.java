package com.TMDB.backend.Post;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PostRequestDto {
  private Long movieId;
  private String title;
  private String content;
  private Long writerId;
  private Long categoryId;

  public PostRequestDto(Post post) {
    this.movieId = post.getMovieId();
    this.title = post.getTitle();
    this.content = post.getContent();
    this.writerId = post.getWriterId();
    this.categoryId = post.getCategoryId();
  }
}
