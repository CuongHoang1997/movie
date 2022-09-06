import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-500 w-full h-[280px] ">
      <div className="flex justify-around ">
        <img
          src="https://www.nicepng.com/png/full/436-4369539_movie-logo-film.png"
          alt=""
          className=" mt-5"
        />
        <div className="mt-5 text-2xl">
          <p classname="font-extrabold text-blue-500 ">Contact:</p>
          <div className="opacity-80 cursor-pointer block">
            <ul>
              <li className="link">
                <a href="https://www.facebook.com/cuonghoang9997/">Facebook</a>
              </li>
              <li className="link">
                <a href="https://mail.google.com/mail/u/0/#inbox">Google</a>
              </li>
              <li className="link">
                <a href="https://www.instagram.com/cuonghoang09/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-2xl">
          <span classname="font-bold">Help?</span>
          <div className="opacity-80 cursor-pointer">
            <ul>
              <li className="link">Ask me</li>
              <li className="link">News</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-2xl">
          <span classname="font-bold">Information</span>
          <div className="opacity-80 cursor-pointer">
            <ul>
              <li className="link">Terms of use</li>
              <li className="link">Privacy Policy</li>
              <li className="link">Copyright complaint</li>
            </ul>
          </div>
        </div>
      </div>
      <span className="block text-center text-xl">
        © 2022 Copyright MyMovie.com All Rights reserved.
      </span>
    </div>
  );
};

export default Footer;
