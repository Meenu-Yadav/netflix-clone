import axios from "axios";
import React, { useState } from "react";
import { API_SEARCH, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/userSlice";
import { getSearchedMovies } from "../redux/searchSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const matchedMovies = useSelector((store) => store.search.matchedMovies);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const res = await axios.get(
        `${API_SEARCH}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      const matchedMovies = res?.data?.results;
      dispatch(getSearchedMovies({ searchMovie, matchedMovies }));
      setSearchMovie("");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <div className="flex justify-center pt-[20%] w-[100%]">
        <form onSubmit={submitHandler} className="w-[50%]">
          <div className="flex justify-between shadow-md border-2 p-2 rounded-lg w-[100%] border-gray-200">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className="w-full outline-none rounded-md "
              type="text"
              placeholder="Search Movies..."
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {matchedMovies?.length > 0 ? (
        <MovieList
          title={"Matches..."}
          movies={matchedMovies}
          searched={true}
        />
      ) : (
        <h1> No matches found</h1>
      )}

      <div />
    </>
  );
};

export default SearchMovie;
