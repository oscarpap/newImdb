import React from "react";
import { render, screen } from "@testing-library/react";

import MovieTitle from "./MovieTitle";

describe("MovieTitle", () => {
  test("renders the MovieTitle component", () => {
    render(<MovieTitle rank={22} title={"TitleName"} year={2021} />);

    expect(screen.getByText("22.")).toBeInTheDocument();
    expect(screen.getByText("TitleName")).toBeInTheDocument();
    expect(screen.getByText("(2021)")).toBeInTheDocument();
  });
});
