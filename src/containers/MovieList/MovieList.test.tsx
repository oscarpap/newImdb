import axios from "axios";
import React from "react";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mockData/mockResponse";

import MovieList from "./MovieList";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("MovieList", () => {
  test("Fetches MovieItems from an API and displays them", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { MOCK_DATA },
      })
    );

    render(<MovieList />);
    const items = await screen.findAllByRole("MovieListItem");

    expect(items).toHaveLength(2);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  test("Fetches MovieItems from an API and fails", async () => {
    mockedAxios.get.mockImplementation(() => Promise.reject(new Error()));

    render(<MovieList />);
    expect(
      screen.getByText("Something went wrong while loading the movies")
    ).toBeInTheDocument();
  });
});
