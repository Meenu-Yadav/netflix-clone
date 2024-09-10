import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import SearchMovie from "./SearchMovie";
import MovieContainer from "./MovieContainer";
import useNowPayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomimgMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const toggleSearch = useSelector((store) => store.movie.toggleSearch);

  const navigate = useNavigate();
  useNowPayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomimgMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return (
    <div>
      <Header />
      <div>
        {toggleSearch ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
