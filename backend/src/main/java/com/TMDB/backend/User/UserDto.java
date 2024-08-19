package com.TMDB.backend.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDto {
  private String email;
  private String username;

  public UserDto(User user) {
    this.email = user.getEmail();
    this.username = user.getUsername();
  }
}
