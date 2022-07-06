import Button from "components/button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const NewPage = () => {
  return <BannerItem></BannerItem>;
};

function BannerItem({ item }) {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white relative ">
      <div className=" overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src="https://images.blackmagicdesign.com/images/media/releases/2020/20200427_rooster-teeth/carousel/rooster-teeth-1.jpg?_v=1587346251"
        alt=""
        className="w-full h-[660px] object-cover overflow-hidden"
      />
      <div className="intro absolute bottom-[250px] w-[700px] text-center text-white ">
        <h2 className="font-bold text-[55px] leading-none">
          Unlimited movies, TV shows, and more.
        </h2>
        <span className="font-bold text-2xl mt-3 block">
          Watch anywhere. Cancel anytime.
        </span>
        <br />
        <span className="text-[18px] inline-block">
          Ready to watch? Login your email to create or restart your membership.
        </span>
        <div className="flex items-center gap-x-3 mb-6"></div>
        <Button onClick={navigate("/home")} className="w-[200px]">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default NewPage;
