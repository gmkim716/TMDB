package com.TMDB.backend.User;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

  private final UserService userService;

  @GetMapping("/list")
  public ResponseEntity<List<UserDto>> userList() {
    List<UserDto> users = userService.userList();
    return ResponseEntity.ok(users);
  }

  @PostMapping("/")
  public ResponseEntity<UserDto> register(@RequestBody UserRegisterDto registerDto) throws Exception {
    UserDto createdUser = userService.register(registerDto);
    return ResponseEntity.status(201).body(createdUser);
  }
}
