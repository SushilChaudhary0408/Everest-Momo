// import React from 'react'
// // import CEO from './CEO'
// import About09 from '../../../images/aboutImg/About09.jpeg'
// import SliderComponent from './CEO';



// function CeoCard() {

//     const aboutStyle09 = {
//         position: 'relative',
//         zIndex: -1,
//         transition: 'background-image 0.5s ease',
//         overflow: 'hidden',
//     };

//     const backgroundImageStyle09 = {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundImage: `url(${About09})`,
//         backgroundSize: 'cover',
//         filter: 'blur(10px)',
//         zIndex: -1,
//     };

//     const overlayStyle09 = {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'linear-gradient(to right, rgba(0,0,0), rgba(0,0,0))',
//         opacity: 0.7,
//         zIndex: 0,
//     };

//     const textStyle09 = {
//         position: 'absolute',
//         color: 'white',
//         zIndex: 1,
//     };

//     return (

//         <div className='mt-20'>
//             <div className='flex flex-col h-[600px] items-center md:flex-row w-full relative inset-0'>
//                 <div className='w-[100%] md:w-[80%] h-full flex px-6 lg:px-32 items-center' style={aboutStyle09}>
//                     <div style={backgroundImageStyle09} className='h-full'></div>
//                     <div style={overlayStyle09}></div>
//                     <div style={textStyle09} className='flex flex-col items-center'>
//                         {/* <CEO /> */}
//                     </div>
//                     {/* <CEO /> */}
//                     <SliderComponent />
//                 </div> 
//                 <div className='flex items-center h-[600px] w-[100%] md:w-[90%] lg:w-[60%] overflow-hidden bg-cover'>
//                     {/* <img className='w-[100%] h-[600px] bg-cover relative' src={coreMembers[currentCoreMember].image} alt="" /> */}
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default CeoCard;




// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

// const testimonials = [
//     {
//         text: "Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences",
//         name: "Rajan Thakuri",
//         image: "path_to_image/About10", // Update with the correct path to your image
//     },
//     {
//         text: "Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences",
//         name: "Nabin Japrel",
//         image: "path_to_image/About11", // Update with the correct path to your image
//     },
// ];

// const CustomPrevArrow = ({ onClick }) => (
//     <div
//         className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer text-white'
//         onClick={onClick}
//     >
//         <IoMdArrowRoundBack />
//     </div>
// );

// const CustomNextArrow = ({ onClick }) => (
//     <div
//         className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer text-white'
//         onClick={onClick}
//     >
//         <IoMdArrowRoundForward />
//     </div>
// );

// const CeoCard = () => {
//     const sliderRef = useRef(null);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplaySpeed: 3000,
//         arrows: false, // Disable default arrows
//     };

//     return (
//         <div className='flex'>
//             <div className="slider-container w-[60%] bg-neutral-700">
//                 <Slider ref={sliderRef} {...settings}>
//                     {testimonials.map((testimonial, index) => (
//                         <div key={index} className="testimonial-slide">
//                             {/* <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" /> */}
//                             <p className='text-2xl md:text-5xl lg:text-9xl'>❝</p>
//                             <p className="mt-2 md:mt-5 text-sm lg:text-2xl">{testimonial.text}</p>
//                             <p className="mt-1 md:mt-10 font-bold text-md lg:text-4xl">- {testimonial.name}</p>
//                         </div>
//                     ))}
//                 </Slider>
//                 <div className="arrows-container flex gap-3">
//                     <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
//                     <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
//                 </div>
//             </div>
//             <div className='w-[40%] bg-slate-600'>
//                 <img src={testimonials.image} alt={testimonials.name} className="testimonial-image" />
//             </div>
//         </div>
//     );
// };

// export default CeoCard;


import React from 'react';
import About09 from '../../../images/aboutImg/About09.jpeg';
// import SliderComponent from './SliderComponent';
import CEO from './CEO';
import About10 from "../../../images/aboutImg/About10.jpeg"

function CeoCard() {
    const aboutStyle09 = {
        position: 'relative',
        zIndex: 1, // Ensure it is above the background image
        transition: 'background-image 0.5s ease',
        overflow: 'hidden',
    };

    const backgroundImageStyle09 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${About09})`,
        backgroundSize: 'cover',
        filter: 'blur(10px)',
        zIndex: -1, // Behind everything
    };

    const overlayStyle09 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7))',
        opacity: 0.7,
        zIndex: 0, // Above the background image but below the text
    };

    const textStyle09 = {
        position: 'relative',
        color: 'white',
        zIndex: 1, // Above the overlay
    };

    return (
        <div className='mt-20'>
            <div className='flex flex-col h-[600px] items-center md:flex-row w-full relative inset-0'>
                <div className='w-[100%] md:w-[80%] h-full flex px-6 lg:px-32 items-center' style={aboutStyle09}>
                    <div style={backgroundImageStyle09} className='h-full'></div>
                    <div style={overlayStyle09}></div>
                    <div style={textStyle09} className='flex flex-col items-center w-full'>
                        {/* <SliderComponent /> */}
                        <CEO />
                    </div>
                </div>
                <div className='flex items-center h-[600px] w-[100%] md:w-[90%] lg:w-[60%] overflow-hidden bg-cover'>
                    {/* <img className='w-[100%] h-[600px] bg-cover relative' src={coreMembers[currentCoreMember].image} alt="" /> */}
                    <img src={About10} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CeoCard;
