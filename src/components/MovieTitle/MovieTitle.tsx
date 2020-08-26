import classes from "./MovieTitle.module.scss";
import React from "react";

interface MovieTitleProps {
  rank: number;
  title: string;
  year: number;
}

const MovieTitle: React.FunctionComponent<MovieTitleProps> = ({
  rank,
  title,
  year,
}) => {
  return (
    <div className={classes.MovieTitle}>
      <p className={classes.rank}> {rank + "."}</p>
      <p className={classes.title}> {title}</p>
      <p className={classes.year}> {"(" + year + ")"}</p>
    </div>
  );
};

export default MovieTitle;
