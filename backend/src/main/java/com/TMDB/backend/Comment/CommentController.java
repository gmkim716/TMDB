package com.TMDB.backend.Comment;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/comment")
public class CommentController {

  private final CommentService commentService;

  @GetMapping("/list/{reviewId}")
  public ResponseEntity<List<CommentResponseDto>> getComments(@PathVariable Long reviewId) {
    return ResponseEntity.ok(commentService.getCommentsByReviewId(reviewId));
  }

  @PostMapping("/write/{reviewId}")
  public ResponseEntity<CommentResponseDto> postComment(@PathVariable Long reviewId, @RequestBody @Valid CommentWriteDto registerDto) {
    return ResponseEntity.status(201).body(commentService.writeComment(reviewId, registerDto));
  }
}
