package com.TMDB.backend.Post;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PostDto {
  private Long id;
  private String title;
  private String content;
  private Long writerId;
  private Long categoryId;

  public PostDto(Post post) {
    this.id = post.getId();
    this.title = post.getTitle();
    this.content = post.getContent();
    this.writerId = post.getWriterId();
    this.categoryId = post.getCategoryId();
  }
}
