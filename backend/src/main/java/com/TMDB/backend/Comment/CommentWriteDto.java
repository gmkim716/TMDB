package com.TMDB.backend.Comment;

import lombok.Data;

@Data
public class CommentWriteDto {
  private String content;
  private Long userId;
}
