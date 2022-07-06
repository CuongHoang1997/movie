import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { apiKey, apiStart, fetcher, imgStart } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `${apiStart}/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const {
    poster_path,
    title,
    production_companies,
    production_countries,
    release_date,
    runtime,
    genres,
    vote_average,
    vote_count,
    overview,
  } = data;
  console.log(data);
  return (
    <Fragment>
      <div className="movie-detail flex mx-20 mb-10 h-[600px]">
        <div className="flex w-[800px] bg-slate-900 ">
          <img
            src={`${imgStart}/${poster_path}`}
            alt=""
            className="w-[450px]"
          />
          <div className="px-5 opacity-90">
            <h1 className="text-[40px] font-bold text-white ">{title}</h1>
            <div className="">
              <div className="">
                <span className="font-bold  ">Production Company:</span>
                <ul>
                  {production_companies.length > 0 &&
                    production_companies.slice(0, 3).map((item) => {
                      return (
                        <li className="text-green-500" key={item.id}>
                          {item.name}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="">
                <span className="font-bold  ">Production Country:</span>
                <ul>
                  {production_countries.length > 0 &&
                    production_countries.slice(0, 3).map((item, index) => {
                      return (
                        <li className="text-green-500" key={index}>
                          {item.name}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <span className="font-bold   ">Year of manufacture: </span>
              <span className="text-green-500">
                {new Date(release_date).getFullYear()}
              </span>{" "}
              <br />
              <span className="font-bold   ">Run time: </span>
              <span className="text-green-500">{runtime} minute</span>
              <div className="">
                <span className="font-bold  ">Category:</span>
                <ul>
                  {genres.length > 0 &&
                    genres.map((item, index) => {
                      return (
                        <li className="text-green-500" key={index}>
                          {item.name}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <span className="font-bold   ">Vote rate: </span>
              <span className="text-green-500">{vote_average} / 10</span> <br />
              <span className="font-bold   ">Vote count: </span>
              <span className="text-green-500">{vote_count}</span> <br />
            </div>
          </div>
        </div>
        <MovieSimilar></MovieSimilar>
      </div>
      <MovieCredits></MovieCredits>
      <div className="ml-20 w-[800px] mb-5">
        <h1 className=" text-3xl mb-5 font-bold">Movie Review</h1>
        <span className="text-green-500">{overview}</span>
      </div>
      <MovieReview></MovieReview>
    </Fragment>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `${apiStart}/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <div className="">
      <h1 className="ml-20 text-3xl mb-5 font-bold ">Casts: </h1>
      <div className="ml-20 grid grid-cols-5 w-[750px] gap-4 mb-10">
        {cast.slice(0, 5).map((item, index) => (
          <div className="cast-item" key={index}>
            <img
              src={`${imgStart}/${item.profile_path}`}
              alt=""
              className="w-full h-[200px] object-cover rounded-md mb-2"
            />
            <span className="text-xl font-medium text-green-500">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieReview() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `${apiStart}/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div>
      <div className="">
        {results.slice(0, 1).map((item, index) => (
          <div className="ml-20 mb-10 text-green-500" key={index}>
            <iframe
              width="800"
              height="455"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="TRUNG ORIANNA | ANH TRUNG ĐIỀU BI NHƯNG KHÔNG PHẢI LÀ JANGBII, BI NÀY NÓ LẠ LẮM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `${apiStart}/${movieId}/similar?api_key=${apiKey}&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log("video", results);

  return (
    <div className=" pl-5 w-[400px] item-end">
      <h1 className="text-2xl font-bold mb-3">Similar movies</h1>{" "}
      {results.slice(0, 9).map((item, index) => (
        <div
          onClick={() => navigate(`/movie/${item.id}`)}
          key={index}
          className=" flex  p-2 bg-slate-700 text-white cursor-pointer border-b-2 border-opacity-20 border-white "
        >
          <img
            className="w-[100px] h-[150px] rounded-md"
            src={`${imgStart}/${item.poster_path}`}
            alt=""
          />
          <div className="flex flex-col ml-2">
            <h3 className="text-white text-xl font-bold mb-1 ">{item.title}</h3>
            <div className=" item-center text-sm opacity-50 mb-2 ">
              <span>{new Date(item.release_date).getFullYear()}</span>
            </div>
            <div className=" item-center text-sm opacity-50 mb-2 ">
              <span>{item.popularity} views</span>
            </div>
            <div className="flex item-center text-sm  mb-2 ">
              <span className="opacity-50">{item.vote_average.toFixed(1)}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      ))}{" "}
    </div>
  );
}

export default MovieDetailsPage;
