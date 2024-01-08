import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Details from "./Details";
import { useFetch } from "../../hooks/useFetch";

// es necesario mockear el useLocation ya q el componente obtiene el movie id del pathname.
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/details/695721",
  }),
}));

jest.mock("../../hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

describe("Details Component", () => {
  it("should renders movie data", () => {
    const mockMovieData = {
      adult: false,
      backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      belongs_to_collection: {
        id: 131635,
        name: "The Hunger Games Collection",
        poster_path: "/fPer2U4uQT1dkXTUWODDaLECWoW.jpg",
        backdrop_path: "/Ipp7cegtub4t0mu7xaKLQkYoGc.jpg",
      },
      budget: 100000000,
      genres: [
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
        {
          id: 28,
          name: "Action",
        },
      ],
      homepage: "https://hungergames.movie",
      id: 695721,
      imdb_id: "tt10545296",
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      popularity: 2016.503,
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      production_companies: [
        {
          id: 1632,
          logo_path: "/cisLn1YAUuptXVBa0xjq7ST9cH0.png",
          name: "Lionsgate",
          origin_country: "US",
        },
        {
          id: 5420,
          logo_path: "/dlW4Kh5dNieKNURnymsu57y6fMf.png",
          name: "Color Force",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "2023-11-15",
      revenue: 322600000,
      runtime: 157,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
      ],
      status: "Released",
      tagline: "Everyone hungers for something.",
      title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      video: false,
      vote_average: 7.234,
      vote_count: 1351,
    };

    useFetch.mockReturnValue({
      data: mockMovieData,
      error: null,
      loading: false,
    });

    const { getByText } = render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    expect(
      getByText("The Hunger Games: The Ballad of Songbirds & Snakes")
    ).toBeInTheDocument();
  });

  it("should show loading message", () => {
    useFetch.mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });

    const { getByText } = render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    expect(getByText("Loading movie details...")).toBeInTheDocument();
  });
});
