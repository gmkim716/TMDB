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

  @GetMapping("/list/now_playing")
  public ResponseEntity<?> getNowPlaying() {
    try {
      Response movieResponse = movieService.getNowPlayingMovies();  // 영화 데이터 가져오기
      MovieResponseDto responseDto = objectMapper.readValue(movieResponse.body() != null ? movieResponse.body().string() : null, MovieResponseDto.class);  // 가져온 데이터를 MovieResponseDto로 변환
      return ResponseEntity.ok(responseDto);
    } catch (IOException e) {
      return ResponseEntity.badRequest().body("Now Playing 영화 정보를 가져오는 데 실패했습니다.");
    }
  }

  @GetMapping("/list/popular")
  public ResponseEntity<?> getPopular() {
    try {
      Response movieResponse = movieService.getPopularMovies();  // 영화 데이터 가져오기
      MovieResponseDto responseDto = objectMapper.readValue(movieResponse.body() != null ? movieResponse.body().string() : null, MovieResponseDto.class);  // 가져온 데이터를 MovieResponseDto로 변환
      return ResponseEntity.ok(responseDto);
    } catch (IOException e) {
      return ResponseEntity.badRequest().body("Popular 영화 정보를 가져오는 데 실패했습니다.");
    }
  }

  @GetMapping("/list/top_rated")
  public ResponseEntity<?> getTopRated() {
    try {
      Response movieResponse = movieService.getTopRatedMovies();  // 영화 데이터 가져오기
      MovieResponseDto responseDto = objectMapper.readValue(movieResponse.body() != null ? movieResponse.body().string() : null, MovieResponseDto.class);  // 가져온 데이터를 MovieResponseDto로 변환
      return ResponseEntity.ok(responseDto);
    } catch (IOException e) {
      return ResponseEntity.badRequest().body("Top Rated 영화 정보를 가져오는 데 실패했습니다.");
    }
  }

  @GetMapping("/list/upcoming")
  public ResponseEntity<?> getUpcoming() {
    try {
      Response movieResponse = movieService.getUpcomingMovies();  // 영화 데이터 가져오기
      MovieResponseDto responseDto = objectMapper.readValue(movieResponse.body() != null ? movieResponse.body().string() : null, MovieResponseDto.class);  // 가져온 데이터를 MovieResponseDto로 변환
      return ResponseEntity.ok(responseDto);
    } catch (IOException e) {
      return ResponseEntity.badRequest().body("Upcoming 영화 정보를 가져오는 데 실패했습니다.");
    }
  }
}