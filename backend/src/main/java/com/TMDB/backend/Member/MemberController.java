package com.TMDB.backend.Member;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/member")
public class MemberController {

  MemberService memberService;

//  @PostMapping("/register")
//  public MemberDto register() throws Exception {
//    MemberDto memberDto = memberService.register();
//    return memberDto;
//  }
}
