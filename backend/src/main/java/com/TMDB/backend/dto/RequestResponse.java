package com.TMDB.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RequestResponse {
  private String status;
  private String message;
}
