import classes from "./MoviePoster.module.scss";
import React from "react";

interface MoviePosterProps {
  posterUrl: string;
}

const MoviePoster: React.FunctionComponent<MoviePosterProps> = ({
  posterUrl,
}) => {
  return (
    <div className={classes.MoviePoster}>
      <img src={posterUrl} alt="Movie Poster" />
    </div>
  );
};

export default MoviePoster;
