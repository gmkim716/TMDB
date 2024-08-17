package com.TMDB.backend.Post;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

  private final PostRepository postRepository;

  @Transactional(readOnly = true)
  public List<PostDto> postList() {
    List<Post> posts = postRepository.findAll();
    return posts.stream().map(PostDto::new).toList();
  }

  @Transactional(readOnly = true)
  public List<PostDto> postListByCategory(Long categoryId) {
    List<Post> posts = postRepository.findByCategoryId(categoryId);
    return posts.stream().map(PostDto::new).toList();
  }

  @Transactional(readOnly = true)
  public Page<PostDto> getPostsByMovieId(Long movieId, int page, int size) {
    Pageable pageable = PageRequest.of(page, size);
    Page<Post> posts = postRepository.findByMovieId(movieId, pageable);
    return posts.map(PostDto::new);
  }

  @Transactional
  public PostDto write(PostRequestDto postDto) {
    Post post = Post.builder()
      .movieId(postDto.getMovieId())
      .title(postDto.getTitle())
      .content(postDto.getContent())
      .writerId(postDto.getWriterId())
      .createdAt(LocalDateTime.now())
      .status(PostStatus.ACTIVE)
      .categoryId(postDto.getCategoryId())
      .build();

    Post savedPost = postRepository.save(post);
    return new PostDto(savedPost);
  }

  @Transactional
  public void delete(Long postId) {
    try {
      postRepository.deleteById(postId);
    } catch (Exception e) {
      throw new IllegalArgumentException(postId + " 게시글 살제에 실패했습니다.");
    }
  }
}
