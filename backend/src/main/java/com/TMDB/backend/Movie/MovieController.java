package com.TMDB.backend.Movie;

import lombok.AllArgsConstructor;
import okhttp3.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@AllArgsConstructor
@RequestMapping("api/movies")
public class MovieController {

  private final MovieService movieService;

  @GetMapping("now_playing")
  public ResponseBody getNowPlaying() throws IOException {
      ResponseBody movieResponse = movieService.getNowPlayingMovies();
      return movieResponse;
  }
}
