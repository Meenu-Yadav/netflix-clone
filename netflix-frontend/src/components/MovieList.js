import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searched = false }) => {
  return (
    <div className="px-8">
      <h1
        className={`${searched ? "text-black" : "text-white"} text-3xl py-3 `}
      >
        {title}
      </h1>
      <div className="flex no-scrollbar overflow-x-auto">
        <div className="flex items-center">
          {movies?.map((m) => (
            <MovieCard
              className="flex-col"
              key={m.id}
              poster={m.poster_path}
              movieId={m.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
