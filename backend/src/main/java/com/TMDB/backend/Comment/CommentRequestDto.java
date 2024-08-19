package com.TMDB.backend.Comment;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentRequestDto {

  private Long id;
  private Long reviewId;
  private Long userId;
  private String content;
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
  private LocalDateTime createdAt;
  private CommentStatus status;


  public CommentRequestDto(Comment comment) {
    this.id = comment.getId();
    this.reviewId = comment.getReview().getId();
    this.userId = comment.getUser().getId();
    this.content = comment.getContent();
    this.createdAt = comment.getCreatedAt();
    this.status = comment.getStatus();
  }
}
