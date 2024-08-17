package com.TMDB.backend.Post;

import com.TMDB.backend.Comment.Comment;
import com.TMDB.backend.Like.Like;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "posts")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Long movieId;
  private String title;

  @Lob  // Large Object, 큰 덱스트나 바이너리 데이너를 저장
  private String content;

  private Long writerId;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  @Builder.Default
  private Integer views = 0;

  @Builder.Default
  private Integer likes = 0;

  private Long categoryId;

  @Enumerated(EnumType.STRING)
  private PostStatus status;

  @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Comment> comments;

  @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Like> likesSet;

}
