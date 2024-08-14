package com.TMDB.backend.User;

import com.TMDB.backend.Like.Like;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.HashSet;
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
  private String nickname;
  private LocalDateTime createdAt;

  @Enumerated(EnumType.STRING)
  private Role role;

  @Builder
  public User(String email, String password, String nickname, LocalDateTime createdAt, Role role) {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.createdAt = createdAt;
    this.role = role;
  }

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
  private final Set<Like> likes = new HashSet<>();
}
