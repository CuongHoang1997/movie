import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { title, poster_path, vote_average, release_date, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-700 text-white h-full select-none">
      <img
        className="img-movie w-full h-[300px] rounded-md mb-3"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
      />
      <div className="flex flex-col justify-between flex-1">
        <h3 className="title-movie text-white text-xl font-bold mb-1 text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
        <div className="flex item-center justify-between text-sm  mb-2 ">
          <span className="opacity-50">
            {new Date(release_date).getFullYear()}
          </span>
          <div className="flex ">
            <span className="opacity-50">{vote_average}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1  text-yellow-300 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
      <Button full type="primary" onClick={() => navigate(`/movie/${id}`)}>
        Watch now
      </Button>
    </div>
  );
};

export default MovieCard;
