import React from 'react'

import element1 from '../../public/Images/element-01.png';
import element2 from '../../public/Images/element-02.png';
import element3 from '../../public/Images/element-03.png';
import element4 from '../../public/Images/element-04.png';
import element5 from '../../public/Images/element-05.png';
import element6 from '../../public/Images/element-06.png';

const Index = () => {
  return (
    <>
        <div className="hero flex justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px[8%] py-[50px] lg:py-[90px] h-screen relative">
            <div className="hero-content text-center mx-auto w-full flex flex-col items-center relative z-9">
                <span className='text-[#076dcb] font-semibold chakrapetch-font'>
                    <i className='bi bi-book pe-2'></i>
                    Your Future, Achieve Success
                </span>
                <h2 className="text-[#222e48] text-3xl sm:text-5xl lg:text-7xl leading-14 lg:leading-20 font-bold sora-font py-2 w-full xl:w-[75%]">Find Your <span className='text-[#18a54a]'>Ideal</span>Course, Build <span className='text-[#e58209]'>Skills</span></h2>


                <p className='text-[#576070] w-full lg:w-[60%] pb-4 text-sm sm:text-md'>
                    We are dedicated to nurturing young minds, empowering them with knowledge, skills, and confidance to excel.
                </p>
                <div className="flex gap-3 flex-wrap">
                    <button className='btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300' type='submit'>Get Start Today
                        <i className="bi bi-arrow-up-right ps-2"></i>
                    </button>
                    
                    <button className='btn custom-btn text-[#076dcb] border border-[#076dcb] hover:bg-[#076dcb] hover:text-white px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300' type='submit'>Find Courses
                        <i className="bi bi-arrow-up-right ps-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Index
