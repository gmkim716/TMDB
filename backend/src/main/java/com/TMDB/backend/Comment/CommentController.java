package com.TMDB.backend.Comment;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/comment")
public class CommentController {

  private final CommentService commentService;

  @PostMapping("/write")
  public CommentDto write(@RequestBody @Valid CommentRegisterDto registerDto) {
    CommentDto commentDto = commentService.write(registerDto);
    return commentDto;
  }
}
