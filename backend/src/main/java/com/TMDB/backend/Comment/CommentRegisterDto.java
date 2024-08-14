package com.TMDB.backend.Comment;

import lombok.Data;

@Data
public class CommentRegisterDto {

  private String content;
  private Long postId;
  private Long writerId;

}
