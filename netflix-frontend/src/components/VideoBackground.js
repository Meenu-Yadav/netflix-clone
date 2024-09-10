import React from "react";
import useMovieByID from "../hooks/useMovieByID";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId, dialog = false }) => {
  const trailer = useSelector((store) => store.movie.trailer);
  useMovieByID(movieId);

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${dialog ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&loop=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
