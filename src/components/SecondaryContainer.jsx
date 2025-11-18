import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className=" bg-black">
      <div className="z-20 relative -mt-20 pl-12">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularmovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Up Coming"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
