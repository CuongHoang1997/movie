import React from "react";
import { apiKey, apiStart, fetcher, imgStart } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { log } from "@craco/craco/lib/logger";

const Banner = () => {
  const { data } = useSWR(`${apiStart}/popular?api_key=${apiKey}`, fetcher);
  const movies = data?.results || [];
  console.log(movies);

  return (
    <section className="banner h-[500px] page-container mb-12 overflow-hidden ">
      <Swiper grabCursor={"true"} slidesPerView={"auto"} className="h-full">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full rounded-lg bg-white relative ">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`${imgStart}/${item.backdrop_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg "
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{item.title}</h2>
        <div className="flex items-center gap-x-3 mb-6">
          <span className="py-1 px-4 border-2 border-white rounded-md font-bold">
            Actions
          </span>
          <span className="py-1 px-4 border-2 border-white rounded-md font-bold">
            Adventure
          </span>
          <span className="py-1 px-4 border-2 border-white rounded-md font-bold">
            Drama
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${item.id}`)}>Watch now</Button>
      </div>
    </div>
  );
}

export default Banner;
