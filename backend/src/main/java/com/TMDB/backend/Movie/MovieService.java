package com.TMDB.backend.Movie;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class MovieService {

  private final OkHttpClient client = new OkHttpClient();

  public ResponseBody getNowPlayingMovies() throws IOException {
    Request request = new Request.Builder()
        .url("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1")
        .get()
        .addHeader("accept", "application/json")
        .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzA0YWQxOTEzNjI1NTc4ZTk0NjFhNjVjNTE5ODJlYiIsIm5iZiI6MTcyMzQ2MTQxMy4yNjI5MDUsInN1YiI6IjY2YjllZDhhNGE4MTJlODM1N2Q3NmRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ob3j9c1HWWpq3GtWvygIT-v7keYtzrO1X13JzDiSy8k ")
        .build();

    try (Response response = client.newCall(request).execute()) {
      if (!response.isSuccessful()) {
        throw new IOException("Unexpected code " + response);
      }
      return response.body();
    }
  }

  public String getNowPlaying() {
    return "현재 상영 중인 영화 목록을 반환합니다.";
  }
}
