package com.TMDB.backend.Comment;

import com.TMDB.backend.Post.Post;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "post_id", nullable = false)
  private Post post;

  private Long writerId;

  @Lob
  private String content;

  private LocalDateTime createdAt;

  @Enumerated(EnumType.STRING)
  private CommentStatus status;
}
