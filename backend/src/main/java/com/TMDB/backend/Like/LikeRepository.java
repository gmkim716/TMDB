package com.TMDB.backend.Like;

import com.TMDB.backend.Comment.Comment;
import com.TMDB.backend.Post.Post;
import com.TMDB.backend.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
  boolean existsByUserAndPost(User user, Post post);
  boolean existsByUserAndComment(User user, Comment comment);
  Optional<Like> findByUserAndPost(User user, Post post);
  Optional<Like> findByUserAndComment(User user, Comment comment);
}
