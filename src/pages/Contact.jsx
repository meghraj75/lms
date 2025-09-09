import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="section-banner bg-[#f3f9ff] h-[400px] py-[50px] lg:py-[90px] flex flex-col justify-center items-center relative">
        <h1 className="chakrapetch-font font-bold text-5xl lg:text-6xl mb-5 text-[#222e48]">
          Courses
        </h1>
        <ul className="flex items-center gap-2">
          <li className="cursor-pointer">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="pr-1" />
              <span className="text-sm xl:text-md text-[#404a60]">Home</span>
            </Link>
          </li>
          /
          <li className="cursor-pointer">
            <Link to="/Courses">
              <span className="text-sm xl:text-md text-[#f37739]">Courses</span>
            </Link>
          </li>
        </ul>

        <img
          src={element1}
          alt="shape-image"
          className="element1  shape1 absolute left-30 top-30 object-contain hidden md:block"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2  shape2 absolute left-20 top-60 object-contain hidden md:block"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3  shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element4  shape4 absolute right-30 bottom-30 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5  shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5  shape5 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
      </div>
    </>
  );
};

export default Contact;
