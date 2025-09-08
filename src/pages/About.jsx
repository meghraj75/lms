import { faHome } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";
import element6 from "../../public/Images/element-06.png";

import featuresImage1 from "../../public/Images/features-icon1.png";
import featuresImage2 from "../../public/Images/features-icon2.png";
import featuresImage3 from "../../public/Images/features-icon3.png";

import whychooseImage from "../../public/Images/about-img.png";

import choseImage1 from "../../public/Images/choose-icon1.png";
import choseImage2 from "../../public/Images/choose-icon2.png";
import choseImage3 from "../../public/Images/choose-icon3.png";
import choseImage4 from "../../public/Images/choose-icon4.png";
const About = () => {
  return (
    <>
      <div className="section-banner bg-[#f3f9ff] h-[400px] py-[50px] lg:py-[90px] flex flex-col justify-center items-center relative">
        <h1 className="chakrapetch-font font-bold text-5xl lg:text-6xl mb-5 text-[#222e48]">
          About Us
        </h1>
        <ul className="flex items-center gap-2">
          <li className="cursor-pointer">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="pr-1" />
              <span className="text-sm xl:text-md text-[#404a60]">Home</span>
            </Link>
          </li>
          /
          <li>
            <Link to="/About">
              <span className="text-sm xl:text-md text-[#404a60]">
                About Us
              </span>
            </Link>
          </li>
        </ul>
        <img
          src={element1}
          alt="shape-image"
          className="element1 hero-shape1 absolute left-30 top-30 object-contain hidden md:block"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element4 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element6 hero-shape6 absolute right-50 top-20 w-[25px] hidden lg:flex"
        />
      </div>

      <div className="learning relative px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px]">
        <div className="course-content z-2 pt-10 lg:pt-0 flex justify-between items-center flex-col lg:flex-row w-full gap-3">
          <h2 className="text-[#222e48] text-2xl sm:text-4xl md:leading-10 sora-font font-semibold lg:w-[50%]">
            Build Better Growth Skills, Faster , Ignite your Learning Journey .
          </h2>
          <div className="lg:w-[50%] w-full">
            <p className="text-[#576070] text-sm pb-2">
              Explore New Skills, Deepen existing passions , and get lost in
              creativity . what you find just might .
            </p>
            <Link to="/Courses">
              <button
                className="btn text-[#076dcd] hover:text-black font-medium  px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
                type="submit"
              >
                Read More
                <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[60px]">
          {/* cart-1 */}
          <div className="feature-item hover:bg-[#066dca] group flex justify-center items-center flex-col bg-white shadow-xl rounded-xl py-12 transition-all duration-300">
            <div className="feature-icon bg-[#f3f9ff] rounded-[50%] w-[90px] h-[90px] p-5 flex justify-center items-center">
              <img src={featuresImage1} alt="feature-icon" />
            </div>
            <div className="feature-info pt-8 text-center">
              <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                Learn the Latest Skills
              </h4>
              <p className="text-[#576070] text-sm group-hover:text-white">
                Quality education shold't break the bank . we offer competitive
                pricing and payment ...
              </p>
            </div>
          </div>
          {/* cart-2 */}
          <div className="feature-item hover:bg-[#066dca] group flex justify-center items-center flex-col bg-white shadow-xl rounded-xl py-12 transition-all duration-300">
            <div className="feature-icon bg-[#f3f9ff] rounded-[50%] w-[90px] h-[90px] p-5 flex justify-center items-center">
              <img src={featuresImage2} alt="feature-icon" />
            </div>
            <div className="feature-info pt-8 text-center">
              <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                Get Ready for a career
              </h4>
              <p className="text-[#576070] text-sm group-hover:text-white">
                Engage in dynamic and interactive learning experience . Our
                courses are designd ...
              </p>
            </div>
          </div>
          {/* cart-3 */}
          <div className="feature-item hover:bg-[#066dca] group flex justify-center items-center flex-col bg-white shadow-xl rounded-xl py-12 transition-all duration-300">
            <div className="feature-icon bg-[#f3f9ff] rounded-[50%] w-[90px] h-[90px] p-5 flex justify-center items-center">
              <img src={featuresImage3} alt="feature-icon" />
            </div>
            <div className="feature-info pt-8 text-center">
              <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                Earn a Certificate
              </h4>
              <p className="text-[#576070] text-sm group-hover:text-white">
                Join a vibrant and supportive learning community . contact with
                learniners...
              </p>
            </div>
          </div>
        </div>
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element4 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element6 hero-shape6 absolute right-50 top-20 w-[25px] hidden lg:flex"
        />
      </div>

      <div className="info bg-[#006dca]">
        <div className="px-[8%] lg:px-[12%] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#006dca] min-w-[50px] flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-camera-video"></i>
              </div>
              <div className="info-text">
                <h2 className="text-white font-semibold text-md sora-font">
                  50,000 online courses
                </h2>
                <p className="text-white text-xs">
                  Enjoy a variety of fresh topics
                </p>
              </div>
            </div>
            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#006dca] min-w-[50px] flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-people"></i>
              </div>
              <div className="info-text">
                <h2 className="text-white font-semibold text-md sora-font">
                  100+ Industry Expert's
                </h2>
                <p className="text-white text-xs">
                  Find a right instructor for you
                </p>
              </div>
            </div>
            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#006dca] min-w-[50px] flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-clock"></i>
              </div>
              <div className="info-text">
                <h2 className="text-white font-semibold text-md sora-font">
                  Lifetime access
                </h2>
                <p className="text-white text-xs">Learn on your schedule</p>
              </div>
            </div>
            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#006dca] min-w-[50px] flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-award"></i>
              </div>
              <div className="info-text">
                <h2 className="text-white font-semibold text-md sora-font">
                  Get Certificate
                </h2>
                <p className="text-white text-xs">When Course Complate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative">
        {/* Image (Left Side) */}
        <div className="w-full lg:w-1/2 h-[500px] overflow-hidden group rounded-lg">
          <img
            src={whychooseImage}
            alt="why-choose-us"
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content (Right Side) */}
        <div className="flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold sora-font pb-1">
            <i className="bi bi-book pe-2"></i>
            Why Choose Us
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-4xl md:leading-13 sora-font font-semibold">
            Our Commitment to Excellence, Learn, Grow & Success.
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm">
            We are passionate about transforming lives through education.
            Founded with a vision to make learning accessible to all, we believe
            in the power of knowledge to...
          </p>

          {/* <ul className="flex flex-col gap-6 pb-6">
                  <li className="flex items-center gap-2 text-sm text-[#222e48]">
                    <BsCheckAll className="size-7 text-[#076dcd]" />
                    9/10 Average Satisfaction Rate
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#222e48]">
                    <BsCheckAll className="size-7 text-[#076dcd]" />
                    96% Completion Rate
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#222e48]">
                    <BsCheckAll className="size-7 text-[#076dcd]" />
                    Friendly Environment & Expert Teacher
                  </li>
                </ul> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 pb-10">
            <div className="about-section flex items-center gap-5">
              <div className="about-sec-img min-h-[50px] min-w-[50px] p-4 rounded-full border-gray-100 shadow-lg flex items-center justify-center">
                <img src={choseImage1} alt="" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-md mb-1 sora-font">
                  Academic Excellence
                </h2>
                <p className="text-[#404a60] text-xs">
                  Through our curated courses , interactive content .
                </p>
              </div>
            </div>
            <div className="about-section flex items-center gap-5">
              <div className="about-sec-img min-h-[50px] min-w-[50px] p-4 rounded-full border-gray-100 shadow-lg flex items-center justify-center">
                <img src={choseImage2} alt="" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-md mb-1 sora-font">
                  Course Excellence
                </h2>
                <p className="text-[#404a60] text-xs">
                  Personalized learning paths, we empower learning to...
                </p>
              </div>
            </div>
            <div className="about-section flex items-center gap-5">
              <div className="about-sec-img min-h-[50px] min-w-[50px] p-4 rounded-full border-gray-100 shadow-lg flex items-center justify-center">
                <img src={choseImage3} alt="" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-md mb-1 sora-font">
                  Innovative Learning
                </h2>
                <p className="text-[#404a60] text-xs">
                  Immerse yourself in an innovative learning
                </p>
              </div>
            </div>
            <div className="about-section flex items-center gap-5">
              <div className="about-sec-img min-h-[50px] min-w-[50px] p-4 rounded-full border-gray-100 shadow-lg flex items-center justify-center">
                <img src={choseImage4} alt="" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-md mb-1 sora-font">
                  Sustainability Intiative{" "}
                </h2>
                <p className="text-[#404a60] text-xs">
                  Be a part of a university that cares about the planet
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <button
              className="btn custom-btn bg-[#076dcd] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Read More
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </div>
        </div>

        {/* Shapes */}
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape-2 absolute left-20 top-60 object-contain md:block hidden "
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape-5 absolute right-30 top-70 w-[20px] h-[20px] sm:flex hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape-6 absolute left-10 bottom-50 w-[25px] h-[25px] sm:flex hidden"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape-7 absolute right-50 top-20 lg:flex hidden"
        />
      </div>

      
    </>
  );
};

export default About;
