package com.TMDB.backend.User;

import com.TMDB.backend.Like.Like;
import com.TMDB.backend.Review.Review;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String email;
  private String password;
  private String username;
  private LocalDateTime createdAt;

  @Enumerated(EnumType.STRING)
  private Role role;

  @Builder
  public User(String email, String password, String username, LocalDateTime createdAt, Role role) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.createdAt = createdAt;
    this.role = role;
  }

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Review> reviews = new ArrayList<>();

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Like> likes = new HashSet<>();
}
