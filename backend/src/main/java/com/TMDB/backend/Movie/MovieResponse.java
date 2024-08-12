package com.TMDB.backend.Movie;

import lombok.*;

import java.util.List;

@Data
public class MovieResponse {

  private Dates dates;
  private int page;
  private List<Movie> results;
  private int total_pages;
  private int total_results;

  @Data
  @AllArgsConstructor
  public class Dates {
    private String maximum;
    private String minimum;
  }

  @Data
  @AllArgsConstructor
  public class Movie {
    private boolean adult;
    private String backdrop_path;
    private List<Integer> genre_ids;
    private int id;
    private String original_language;
    private String original_title;
    private String overview;
    private double popularity;
    private String poster_path;
    private String release_date;
    private String title;
    private boolean video;
    private double vote_average;
    private int vote_count;
  }
}
