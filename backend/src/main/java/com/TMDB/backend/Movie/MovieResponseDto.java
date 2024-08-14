package com.TMDB.backend.Movie;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class MovieResponseDto {

  private int page;

  @JsonProperty("results")
  private List<MovieDto> movies;

  @JsonProperty("total_pages")
  private int totalPages;

  @JsonProperty("total_results")
  private int totalResults;
}
