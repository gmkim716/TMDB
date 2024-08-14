package com.TMDB.backend.User;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  @Transactional(readOnly = true)
  public List<UserDto> userList() {
    List<User> users = userRepository.findAll();
    return users.stream().map(UserDto::new).toList();
  }

  @Transactional
  public UserDto register(UserRegisterDto registerDto) throws Exception {

    if (registerDto.getPassword().equals(registerDto.getPasswordConfirmation())) {
      User user = User.builder()
        .email(registerDto.getEmail())
        .password(registerDto.getPassword())
        .nickname(registerDto.getNickname())
        .createdAt(LocalDateTime.now())
        .role(Role.USER)
        .build();
      User savedUser = userRepository.save(user);
      return new UserDto(savedUser);
    } else {
      throw new Exception("비밀번호가 일치하지 않습니다.");
    }
  }
}
