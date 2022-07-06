import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container pb-12">
        <h2 className="text-white mb-5 text-2xl font-bold capitalize">
          Now Playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="movies-layout page-container pb-12">
        <h2 className="text-white mb-5 text-2xl font-bold capitalize">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-12">
        <h2 className="text-white mb-5 text-2xl font-bold capitalize">
          Upcoming
        </h2>
        <MovieList type="upcoming"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
