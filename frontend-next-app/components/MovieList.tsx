/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MovieListProps {
  initialMovies: any[];
}

async function fetchMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("영화정보를 가져오는데 실패했습니다");
  }

  return res.json();
}

export default function MovieList({ initialMovies }: MovieListProps) {
  const [movies, setMovies] = useState(initialMovies || []);
  const [page, setPage] = useState(2); // 첫 페이지는 이미 로드되었기 때문에 2부터 시작한다
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver( // IntersectionObserver를 이용해 스크롤 이벤트를 감지
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreMovies();
        }
      },
      { threshold: 0.5 } // 데이터 로딩 시점을 조정, 1.0은 뷰포트 전체(100%)가 보일 때 데이터를 로드한다는 의미
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, isLoading]);

  const loadMoreMovies = async () => {
    setIsLoading(true);
    try {
      const data = await fetchMovies(page);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setPage((prevPage) => prevPage + 1);

      if (data.results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const movieContainerStyle = css`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  `;

  const movieStyle = css`
    margin: 10px;
    text-align: center;
    h3 {
      margin: 5px 0;
    }
  `;

  const loadingIndicatorStyle = css`
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: grey;
  `;

  return (
    <>
      <div id="movies" css={movieContainerStyle}>
        {movies.map((movie) => (
          <div key={movie.id} css={movieStyle}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width={120}
              height={165}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}

        <div ref={observerRef} css={loadingIndicatorStyle}>
          {isLoading && <p>로딩중입니다..</p>}
        </div>
      </div>
    </>
  );
}
