package com.TMDB.backend.Movie;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import okhttp3.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("api/movie")
public class MovieController {

  private final MovieService movieService;
  private final ObjectMapper objectMapper;

  @GetMapping("now_playing")
  public ResponseEntity<?> getNowPlaying() {
    try {
      Response movieResponse = movieService.getNowPlayingMovies();  // 영화 데이터 가져오기
      if (movieResponse != null) {
        String jsonString = movieResponse.body() != null ? movieResponse.body().string() : null;
        MovieResponseDto responseDto = objectMapper.readValue(jsonString, MovieResponseDto.class);  // 가져온 데이터를 MovieResponseDto로 변환
        return ResponseEntity.ok(responseDto);
      }
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}