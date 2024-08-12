package com.TMDB.backend.Web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

  @GetMapping("/")
  public String getMain() {
    return "메인 페이지입니다.";
  }
}
