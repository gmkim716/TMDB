package com.TMDB.backend.Post;

import com.TMDB.backend.dto.Response;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/post")
public class PostController {

  private static final Logger log = LoggerFactory.getLogger(PostController.class);
  private final PostService postService;

  @GetMapping("/list")
  public ResponseEntity<List<PostDto>> postList() {
    List<PostDto> posts = postService.postList();
    return ResponseEntity.ok(posts);
  }

  @GetMapping("/list/category/{categoryId}")
  public ResponseEntity<List<PostDto>> postListByCategory(@PathVariable Long categoryId) {
    List<PostDto> posts = postService.postListByCategory(categoryId);
    return ResponseEntity.ok(posts);
  }

  @GetMapping("/list/movie/{movieId}")
  public ResponseEntity<List<PostDto>> postListByMovieId(@PathVariable Long movieId) {
    List<PostDto> posts = postService.postListByMovieId(movieId);
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
