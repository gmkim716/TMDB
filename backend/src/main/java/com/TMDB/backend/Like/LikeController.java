package com.TMDB.backend.Like;

import com.TMDB.backend.dto.Response;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/like")
public class LikeController {

  private final LikeService likeService;

  @PostMapping("/post/{postId}")
  public Response likePost(@RequestParam Long userId, @PathVariable Long postId) {
    likeService.likePost(userId, postId);
    return new Response("success", "게시글 좋아요 완료");
  }

  @DeleteMapping("/post/{postId}")
  public Response unlikePost(@RequestParam Long userId, @PathVariable Long postId) {
    likeService.unlikePost(userId, postId);
    return new Response("success", "게시글 좋아요 취소 완료");
  }

  @PostMapping("/comment/{commentId}")
  public Response likeComment(@RequestParam Long userId, @PathVariable Long commentId) {
    likeService.likeComment(userId, commentId);
    return new Response("success", "댓글 좋아요 완료");
  }

  @DeleteMapping("/comment/{commentId}")
  public Response unlikeComment(@RequestParam Long userId, @PathVariable Long commentId) {
    likeService.unLikeComment(userId, commentId);
    return new Response("success", "댓글 좋아요 취소 완료");
  }
}
