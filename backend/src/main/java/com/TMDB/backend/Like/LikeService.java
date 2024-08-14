package com.TMDB.backend.Like;

import com.TMDB.backend.Comment.Comment;
import com.TMDB.backend.Comment.CommentRepository;
import com.TMDB.backend.Post.Post;
import com.TMDB.backend.Post.PostRepository;
import com.TMDB.backend.User.User;
import com.TMDB.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class LikeService {

  private final LikeRepository likeRepository;
  private final UserRepository userRepository;
  private final PostRepository postRepository;
  private final CommentRepository commentRepository;

  @Transactional
  public void likePost(Long userId, Long postId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Post post = postRepository.findById(postId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

    boolean alreadyLiked = likeRepository.existsByUserAndPost(user, post);
    if (alreadyLiked) {
      throw new IllegalArgumentException("이미 좋아요를 누른 게시글입니다.");
    }

    Like like = Like.builder()
      .user(user)
      .post(post)
      .createdAt(LocalDateTime.now())
      .build();
    likeRepository.save(like);
  }

  @Transactional
  public void unlikePost(Long userId, Long postId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Post post = postRepository.findById(postId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
    Like like = likeRepository.findByUserAndPost(user, post).orElseThrow(() -> new IllegalArgumentException("해당 좋아요가 없습니다."));

    likeRepository.delete(like);
  }

  @Transactional
  public void likeComment(Long userId, Long commentId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다."));

    boolean alreadyLiked = likeRepository.existsByUserAndComment(user, comment);
    if (alreadyLiked) {
      throw new IllegalArgumentException("이미 좋아요를 누른 댓글입니다.");
    }

    Like like = Like.builder()
      .user(user)
      .comment(comment)
      .createdAt(LocalDateTime.now())
      .build();

    likeRepository.save(like);
  }

  @Transactional
  public void unLikeComment(Long userId, Long commentId) {
    User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
    Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다."));
    Like like = likeRepository.findByUserAndComment(user, comment).orElseThrow(() -> new IllegalArgumentException("해당 좋아요가 없습니다."));

    likeRepository.delete(like);
  }
}
