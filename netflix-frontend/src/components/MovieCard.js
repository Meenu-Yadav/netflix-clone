import React from "react";
import { BANNER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setOpen, setMovieId } from "../redux/movieSlice";

const MovieCard = ({ key, poster }) => {
  const dispatch = useDispatch();
  if (poster == null) return;
  const openHandler = () => {
    dispatch(setOpen(true));
    dispatch(setMovieId(key));
  };
  return (
    <div onClick={openHandler} className="pr-2 w-48">
      <img src={`${BANNER_URL}${poster}`} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
