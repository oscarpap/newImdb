import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./MovieList.module.scss";
import MovieListItem from "../MovieListItem/MovieListItem";
import MOCK_DATA from "../../mockData/mockResponse";

export interface MovieItem {
  name: string;
  year: number;
  rating: number;
  posterUrl: string;
}

export const MovieList: React.FunctionComponent = () => {
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieItems, setMovieItems] = useState<MovieItem[]>([]);

  useEffect(() => {
    setIsLoaded(true);
    setMovieItems(MOCK_DATA);

    /*
    var fetchMovies = async () => {
      let result;

      try {
        result = await axios.get("https://api.example.com/items");
        setIsLoaded(true);
        setMovieItems(result.data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchMovies();
    */
  }, []);

  if (error) {
    return <div>Something went wrong while loading the movies</div>;
  } else if (!isLoaded) {
    return <div>Loading... </div>;
  } else {
    return (
      <div className={classes.MovieListContainer}>
        {movieItems.map((movieItem, id) => {
          return <MovieListItem movieItem={movieItem} rank={id + 1} key={id} />;
        })}
      </div>
    );
  }
};

export default MovieList;
