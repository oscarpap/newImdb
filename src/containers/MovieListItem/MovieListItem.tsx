import React from "react";
import classes from "./MovieListItem.module.scss";
import { MovieItem } from "../MovieList/MovieList";
import MoviePoster from "../../components/MoviePoster/MoviePoster";
import MovieTitle from "../../components/MovieTitle/MovieTitle";
import MovieRating from "../../components/MovieRating/MovieRating";

interface MovieListItemProps {
  movieItem: MovieItem;
  rank: number;
}

export const MovieListItem: React.FunctionComponent<MovieListItemProps> = ({
  movieItem,
  rank,
}) => {
  return (
    <div className={classes.MovieListItem}>
      <MoviePoster posterUrl={movieItem.posterUrl} />
      <MovieTitle rank={rank} title={movieItem.name} year={movieItem.year} />
      <MovieRating rating={movieItem.rating} />
    </div>
  );
};

export default MovieListItem;
