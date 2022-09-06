import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import useSWR from "swr";
import { apiKey, fetcher, movieAPI } from "../config";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";

const itemsPerPage = 16;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(movieAPI.getMoviePage(nextPage));
  const filterDebounce = useDebounce(filter, 1000);

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setNextPage(1);
  };

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(movieAPI.getSearch(filterDebounce, nextPage));
    } else {
      setUrl(movieAPI.getMoviePage(nextPage));
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;

    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="grid-system wide">
      <div className="flex mb-5">
        <div className="flex-1 mt-[100px] mx-20 rounded-lg">
          <input
            type="text"
            className="w-full py-5 rounded-sm bg-white shadow text-black px-3 outline-none text-2xl"
            placeholder="Type to search..."
            onChange={handleFilter}
          />
        </div>
      </div>

      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
      )}
      <div className=" grid grid-cols-5 gap-5 mx-10 movies">
        {movies.length > 0 &&
          movies.map((item) => {
            return <MovieCard key={item.id} item={item}></MovieCard>;
          })}
      </div>
      <div className=" px-5 mx-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount / 20}
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          }
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
