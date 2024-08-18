package com.TMDB.backend.Post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
  List<Post> findByCategoryId(Long categoryId);
  List<Post> findByMovieId(Long movieId);
  Page<Post> findByMovieId(Long movieId, Pageable pageable);
}
