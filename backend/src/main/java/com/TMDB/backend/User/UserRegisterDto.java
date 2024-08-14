package com.TMDB.backend.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
public class UserRegisterDto {

  @NotNull
  @Email
  private String email;

  @NotNull
  private String password;

  @EqualsAndHashCode.Exclude  // equals, hashCode로 인해 발생할 수 있는 에러를 방지
  private String passwordConfirmation;

  private String nickname;
}
