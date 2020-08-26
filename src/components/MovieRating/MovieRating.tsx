import classes from "./MovieRating.module.scss";
import React from "react";
import { ReactComponent as StarImage } from "../../assets/star.svg";

interface MovieRatingProps {
  rating: number;
}

const MovieRating: React.FunctionComponent<MovieRatingProps> = ({ rating }) => {
  return (
    <div className={classes.MovieRating}>
      <StarImage className={classes.StarImage} />
      <p className={classes.Rating}>{rating.toFixed(1)}</p>
    </div>
  );
};

export default MovieRating;
