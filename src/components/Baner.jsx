import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Baner = () => {
  return (
    <div className="pt-32 pb-24 lg:pt-44 lg:pb-32 bg-black">
      <div className="container">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-6xl leading-snug font-bold mb-5">Welcome to Our Blog</h1>
          <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 leading-relaxed tracking-wider text-sm text-justify md:text-center">
            Start your blog today and join a comunity of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tios and tutorials.
          </p>
          <div className="group mt-6 py-2 px-6 bg-white rounded inline-block font-medium text-orange-500 hover:bg-orange-500 hover:text-white transition-all ease-in duration-200 cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
              Learn More <FaArrowRight className="group-hover:ms-2 transition-all ease duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
