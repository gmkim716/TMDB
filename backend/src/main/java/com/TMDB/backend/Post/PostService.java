package com.TMDB.backend.Post;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

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
