import Banner from "components/banner/Banner";
import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <div className="grid-system wide">
        <section className="movies-layout px-12">
          <h2 className="text-primary text-[60px] font-bold capitalize">
            Now Playing
          </h2>
          <MovieList type="now_playing"></MovieList>
        </section>
        <section className="movies-layout px-12">
          <h2 className="text-primary text-[60px] font-bold capitalize">
            Top Rated
          </h2>
          <MovieList type="top_rated"></MovieList>
        </section>
        <section className="movies-layout px-12">
          <h2 className="text-primary text-[60px] font-bold capitalize">
            Upcoming
          </h2>
          <MovieList type="upcoming"></MovieList>
        </section>
      </div>
    </Fragment>
  );
};

export default HomePage;
