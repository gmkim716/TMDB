package com.TMDB.backend.Movie;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class MovieService {

  @Value("${TMDB_API_TOKEN}")
  private String apiToken;

  @Value("${LANGUAGE}")
  private String language;

  private final OkHttpClient client = new OkHttpClient();

  public Response getNowPlayingMovies() throws IOException {
    String url = "https://api.themoviedb.org/3/movie/now_playing?language=" + language + "&page=1";
    Request request = new Request.Builder()
      .url(url)
      .get()
      .addHeader("accept", "application/json")
      .addHeader("Authorization", "Bearer " + apiToken)
      .build();
    return client.newCall(request).execute();
  }

  public Response getPopularMovies() throws IOException {
    Request request = new Request.Builder()
      .url("https://api.themoviedb.org/3/movie/popular?language=" + language + "&page=1")
      .get()
      .addHeader("accept", "application/json")
      .addHeader("Authorization", "Bearer " + apiToken)
      .build();
    return client.newCall(request).execute();
  }

  public Response getTopRatedMovies() throws IOException {
    Request request = new Request.Builder()
      .url("https://api.themoviedb.org/3/movie/top_rated?language=" + language + "&page=1")
      .get()
      .addHeader("accept", "application/json")
      .addHeader("Authorization", "Bearer " + apiToken)
      .build();
    return client.newCall(request).execute();
  }

  public Response getUpcomingMovies() throws IOException {
    Request request = new Request.Builder()
      .url("https://api.themoviedb.org/3/movie/upcoming?language=" + language + "&page=1")
      .get()
      .addHeader("accept", "application/json")
      .addHeader("Authorization", "Bearer " + apiToken)
      .build();
    return client.newCall(request).execute();
  }

}
