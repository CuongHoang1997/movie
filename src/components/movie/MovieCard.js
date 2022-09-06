import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { title, poster_path, vote_average, release_date, id } = item;
  const navigate = useNavigate();
  return (
    <div
      className="movie-card cursor-pointer transform transition duration-500 
      scale-90 hover:scale-100 flex flex-col rounded-lg p-5 mb-10
     bg-opacity-50 bg-blue-500 text-white relative h-[550px]"
    >
      <img
        className="img-movie absolute inset-0 rounded-md mb-3"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        onClick={() => navigate(`/movie/${id}`)}
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="absolute w-full left-0 right-0 top-0 h-20 text-center bg-gradient-to-t from-transparent via-black to-transparent">
          <h3
            title={title}
            className="title-movie text-white my-5 mx-2 text-3xl font-bold mb-1 text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
