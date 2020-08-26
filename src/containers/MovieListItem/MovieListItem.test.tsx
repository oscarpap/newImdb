import React from "react";
import { render, screen } from "@testing-library/react";

import MovieListItem from "./MovieListItem";
import { MovieItem } from "../MovieList/MovieList";

describe("MovieListItem", () => {
  test("renders MovieListItem component", () => {
    var movieItem: MovieItem = {
      name: "MovieName",
      year: 2020,
      rating: 2.33,
      posterUrl: "www.test.com/posterUrl",
    };

    render(<MovieListItem movieItem={movieItem} rank={2} />);

    expect(screen.getByText("MovieName")).toBeInTheDocument();
    expect(screen.getByText("2.3")).toBeInTheDocument();
    expect(screen.getByText("(2020)")).toBeInTheDocument();
    expect(screen.getByText("2.")).toBeInTheDocument();
  });
});
