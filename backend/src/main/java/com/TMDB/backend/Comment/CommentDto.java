package com.TMDB.backend.Comment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDto {

  private Long id;
  private Long postId;
  private Long writerId;
  private String content;

  public CommentDto(Comment comment) {
    this.id = comment.getId();
    this.postId = comment.getPost().getId();
    this.writerId = comment.getWriterId();
    this.content = comment.getContent();
  }
}
