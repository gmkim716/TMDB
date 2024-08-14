package com.TMDB.backend.Movie;

import lombok.*;

import java.util.List;

@Data
public class MovieResponse {

  private Dates dates;  // 상영일
  private int page;  // 현재 페이지
  private List<Movie> results;  // 영화 정보
  private int total_pages;  // 총 페이지 수
  private int total_results;  // 총 결과 수

  @Data
  @AllArgsConstructor
  public static class Dates {
    private String maximum;  // 상영 종료일
    private String minimum;  // 상영 시작일
  }

  @Data
  @AllArgsConstructor
  public static class Movie {
    private boolean adult;  // 청불 여부
    private String backdrop_path;  // 배경 이미지
    private List<Integer> genre_ids;  // 장르 ID
    private int id;  // 영화 ID
    private String original_language;  // 원본 언어
    private String original_title;  // 원제
    private String overview;  // 줄거리
    private double popularity;  // 인기도
    private String poster_path;  // 포스터 이미지
    private String release_date;  // 개봉일
    private String title;  // 제목
    private boolean video;  // 비디오 여부
    private double vote_average;  // 평점
    private int vote_count;  // 평점 수
  }
}
