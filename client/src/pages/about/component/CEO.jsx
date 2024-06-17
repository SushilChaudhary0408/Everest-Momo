
import  '../../../pages/about/component/CEO.css';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import About10 from "../../../images/aboutImg/About10.jpeg"
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const testimonials = [
  {
    text: "Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences",
    name: "Rajan Thakuri",
    image: About10, // Update with the correct path to your image
  },
  {
    text: "Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences",
    name: "Nabin Japrel",
    image: "path_to_image/About11", // Update with the correct path to your image
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <div
    className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer text-white'
    onClick={onClick}
  >
    <IoMdArrowRoundBack />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer text-white'
    onClick={onClick}
  >
    <IoMdArrowRoundForward />
  </div>
);

const CEO = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className='text-2xl md:text-5xl lg:text-9xl'>❝</p>
            <p className="mt-2 md:mt-5 text-sm lg:text-2xl">{testimonial.text}</p>
            <p className="mt-1 md:mt-10 font-bold text-md lg:text-4xl">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
      <div className="arrows-container flex gap-3">
        <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
};

export default CEO;
