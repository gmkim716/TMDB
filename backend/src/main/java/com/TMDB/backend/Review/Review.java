package com.TMDB.backend.Review;

import com.TMDB.backend.Comment.Comment;
import com.TMDB.backend.Like.Like;
import com.TMDB.backend.User.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "reviews")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class Review {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Long movieId;
  private String title;

  @Min(0) @Max(5)
  private Integer rating = 2;

  @Lob  // Large Object, 큰 덱스트나 바이너리 데이너를 저장
  private String content;

  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  @Builder.Default
  private Integer views = 0;

  @Builder.Default
  private Integer likes = 0;

  private Long categoryId;

  @Enumerated(EnumType.STRING)
  private ReviewStatus status;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Comment> comments;

  @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Like> likesSet;

}
