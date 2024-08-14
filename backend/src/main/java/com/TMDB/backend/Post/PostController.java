package com.TMDB.backend.Post;

import com.TMDB.backend.dto.Response;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/post")
public class PostController {

  private final PostService postService;

  @GetMapping("/list")
  public ResponseEntity<List<PostDto>> postList() {
    List<PostDto> posts = postService.postList();
    return ResponseEntity.ok(posts);
  }

  @GetMapping("/list/{categoryId}")
  public ResponseEntity<List<PostDto>> postListByCategory(@PathVariable Long categoryId) {
    List<PostDto> posts = postService.postListByCategory(categoryId);
    return ResponseEntity.ok(posts);
  }

  @PostMapping("/")
  public ResponseEntity<PostDto> write(@RequestBody @Valid PostRequestDto postDto) {
    PostDto createdPost = postService.write(postDto);
    return ResponseEntity.status(201).body(createdPost);
  }

  @DeleteMapping("/{postId}")
  public ResponseEntity<Response> delete(@PathVariable Long postId) {
    postService.delete(postId);
    return ResponseEntity.ok(new Response("success", "게시글 삭제 완료"));
  }
}
