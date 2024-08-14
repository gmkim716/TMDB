package com.TMDB.backend.Comment;

import com.TMDB.backend.Post.Post;
import com.TMDB.backend.Post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

  private final CommentRepository commentRepository;
  private final PostRepository postRepository;

  @Transactional
  public CommentDto write(CommentRegisterDto registerDto) {

    Post post = postRepository.findById(registerDto.getPostId()).orElseThrow(() -> new IllegalArgumentException("게시글이 존재하지 않습니다."));

    Comment comment = Comment.builder()
      .content(registerDto.getContent())
      .post(post)
      .writerId(registerDto.getWriterId())
      .build();

    Comment savedComment = commentRepository.save(comment);
    return new CommentDto(savedComment);
  }

}
