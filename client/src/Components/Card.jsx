// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React, { useState, useRef } from "react";
// import Slider from "react-slick";

// import About11 from '../images/aboutImg/About11.jpg';
// import About12 from '../images/aboutImg/About12.jpeg';
// import About13 from '../images/aboutImg/About13.jpeg';
// import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

// function CustomArrows() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const aboutStyle11 = {
//     backgroundImage: `url(${About11})`,
//   };

//   const aboutStyle12 = {
//     backgroundImage: `url(${About12})`,
//   };

//   const aboutStyle13 = {
//     backgroundImage: `url(${About13})`,
//   };

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     afterChange: (index) => setCurrentSlide(index),
//     responsive: [
//       {
//         breakpoint: 1024, // lg
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 768, // md
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 480, // sm
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   // const aboutStyles = [
//   //   { style: aboutStyle11, title: "Head Chef" },
//   //   { style: aboutStyle12, title: "Assistant Chef" },
//   //   { style: aboutStyle13, title: "Assistant Chef" },
//   // ];

//   return (
//     <div className="slider-container px-6 lg:px-40">
//       {/* <div className="flex flex-col mt-10 "> */}
//         <Slider ref={sliderRef} {...settings} className="">
//           {/* <div className='flex flex-col mt-10 items-center lg:flex-row md:justify-center gap-[24px]'>
//           {aboutStyles.map((item, index) => (
//             <div key={index} style={item.style} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>{item.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div> */}
//           <div className="flex flex-col mt-10 items-center gap-[24px]">
//             <div style={aboutStyle11} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Head Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col mt-10 items-center gap-[24px]">
//             <div style={aboutStyle12} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col mt-10 items-center gap-[24px]">
//             <div style={aboutStyle13} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col mt-10 items-center gap-[24px]">
//             <div style={aboutStyle13} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col mt-10 items-center gap-[24px]">
//             <div style={aboutStyle13} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Slider>
//       {/* </div> */}
//       <div className='flex justify-center mt-4'>
//         <div className='flex w-[1128px] h-[48px]'>
//           <div className='flex justify-between items-center w-full'>
//             <div className='flex items-center h-[48px] w-[85px]'>
//               <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
//               <span>/05</span>
//             </div>
//             <div className='h-[48px] w-[112px] flex justify-end items-center gap-2'>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickPrev()}
//               >
//                 <IoMdArrowRoundBack />
//               </div>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickNext()}
//               >
//                 <IoMdArrowRoundForward />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomArrows;





// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React, { useState, useRef } from "react";
// import Slider from "react-slick";

// import About11 from '../images/aboutImg/About11.jpg';
// import About12 from '../images/aboutImg/About12.jpeg';
// import About13 from '../images/aboutImg/About13.jpeg';
// import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

// function CustomArrows() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const aboutStyle11 = {
//     backgroundImage: `url(${About11})`,
//   };

//   const aboutStyle12 = {
//     backgroundImage: `url(${About12})`,
//   };

//   const aboutStyle13 = {
//     backgroundImage: `url(${About13})`,
//   };

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     afterChange: (index) => setCurrentSlide(index),
//     responsive: [
//       {
//         breakpoint: 1024, // lg
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 768, // md
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 480, // sm
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="slider-container px-6 lg:px-40">
//       <Slider ref={sliderRef} {...settings} className="flex justify-center">
//         <div className="flex justify-center">
//           <div className="flex flex-col items-center gap-[24px]">
//             <div style={aboutStyle11} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Head Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <div className="flex flex-col items-center gap-[24px]">
//             <div style={aboutStyle12} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <div className="flex flex-col items-center gap-[24px]">
//             <div style={aboutStyle13} className='relative bg-cover h-[450px] sm:w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//       <div className='flex justify-center mt-4'>
//         <div className='flex w-[1128px] h-[48px]'>
//           <div className='flex justify-between items-center w-full'>
//             <div className='flex items-center h-[48px] w-[85px]'>
//               <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
//               <span>/05</span>
//             </div>
//             <div className='h-[48px] w-[112px] flex justify-end items-center gap-2'>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickPrev()}
//               >
//                 <IoMdArrowRoundBack />
//               </div>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickNext()}
//               >
//                 <IoMdArrowRoundForward />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomArrows;






// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React, { useState, useRef } from "react";
// import Slider from "react-slick";

// import About11 from '../images/aboutImg/About11.jpg';
// import About12 from '../images/aboutImg/About12.jpeg';
// import About13 from '../images/aboutImg/About13.jpeg';
// import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

// function CustomArrows() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const aboutStyle11 = {
//     backgroundImage: `url(${About11})`,
//   };

//   const aboutStyle12 = {
//     backgroundImage: `url(${About12})`,
//   };

//   const aboutStyle13 = {
//     backgroundImage: `url(${About13})`,
//   };

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     afterChange: (index) => setCurrentSlide(index),
//     responsive: [
//       {
//         breakpoint: 1024, // lg
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 768, // md
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 480, // sm
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="slider-container px-6 lg:px-40">
//       <Slider ref={sliderRef} {...settings} className="flex justify-center gap-9">
//         <div className="flex justify-center">
//           <div className="flex flex-col items-center gap-[24px]">
//             <div style={aboutStyle11} className='card relative bg-cover h-[450px] w-[100%] sm:w-[300px] md:h-[512px] md:w-[340px] lg:[100%] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Head Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <div className="flex flex-col items-center gap-[24px]">
//             <div style={aboutStyle12} className='relative bg-cover h-[450px] w-[100%] sm:w-[300px] md:h-[512px] md:w-[340px] lg:[100%] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <div className="flex flex-col items-center gap-[24px]">
//             <div style={aboutStyle13} className='relative bg-cover h-[450px] w-[100%] sm:w-[300px] md:h-[512px] md:w-[340px] lg:[100%] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>Assistant Chef</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//       <div className='flex justify-center mt-4'>
//         <div className='flex w-[1128px] h-[48px]'>
//           <div className='flex justify-between items-center w-full'>
//             <div className='flex items-center h-[48px] w-[85px]'>
//               <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
//               <span>/05</span>
//             </div>
//             <div className='h-[48px] w-[112px] flex justify-end items-center gap-2'>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickPrev()}
//               >
//                 <IoMdArrowRoundBack />
//               </div>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickNext()}
//               >
//                 <IoMdArrowRoundForward />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomArrows;









// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

// import About11 from '../images/aboutImg/About11.jpg';
// import About12 from '../images/aboutImg/About12.jpeg';
// import About13 from '../images/aboutImg/About13.jpeg';

// const images = [
//   { src: About11, label: "Head Chef" },
//   { src: About12, label: "Assistant Chef" },
//   { src: About13, label: "Assistant Chef" }
// ];

// const CustomArrows = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     afterChange: (index) => setCurrentSlide(index),
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
//       { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
//     ]
//   };

//   return (
//     <div className="slider-container px-6 lg:px-40">
//       <Slider ref={sliderRef} {...settings} className="flex justify-center gap-9">
//         {images.map((image, index) => (
//           <div key={index} className="flex justify-center">
//             <div className="flex flex-col items-center gap-[24px]">
//               <div style={{ backgroundImage: `url(${image.src})` }} className='card relative bg-cover h-[450px] w-[100%] sm:w-[300px] md:h-[512px] md:w-[340px] lg:[100%] transition-background-image duration-500 ease-in-out rounded-lg'>
//                 <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                   <div className='text-white absolute bottom-5 left-5 font-bold'>
//                     <p>{image.label}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <div className='flex justify-center mt-4'>
//         <div className='flex w-[1128px] h-[48px]'>
//           <div className='flex justify-between items-center w-full'>
//             <div className='flex items-center h-[48px] w-[85px]'>
//               <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
//               <span>/05</span>
//             </div>
//             <div className='h-[48px] w-[112px] flex justify-end items-center gap-2'>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickPrev()}
//               >
//                 <IoMdArrowRoundBack />
//               </div>
//               <div
//                 className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
//                 onClick={() => sliderRef.current.slickNext()}
//               >
//                 <IoMdArrowRoundForward />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomArrows;









// import React, { useRef, useState } from 'react';
// import Slider from 'react-slick';
// import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import About11 from '../images/aboutImg/About11.jpg'
// import About12 from '../images/aboutImg/About12.jpeg'
// import About13 from '../images/aboutImg/About13.jpeg'

// // Slider data
// const sliderData = [
//   { id: 1, style: { backgroundImage: About11 }, title: 'Head Chef' },
//   { id: 2, style: { backgroundImage: About12 }, title: 'Assistant Chef' },
//   { id: 3, style: { backgroundImage: About13 }, title: 'Assistant Chef' },
// ];

// // Custom Arrow components
// const CustomNextArrow = ({ onClick }) => (
//   <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer' onClick={onClick}>
//     <IoMdArrowRoundForward />
//   </div>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer' onClick={onClick}>
//     <IoMdArrowRoundBack />
//   </div>
// );

// const CustomArrows = () => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of current slide index

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update currentSlide when slide changes
//   };

//   const goToNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const goToPrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="slider-container bg-orange-600">
//       <Slider ref={sliderRef} {...settings}>
//         {sliderData.map(slide => (
//           <div key={slide.id} className='flex flex-col items-center md:flex-row md:justify-center gap-[24px]'>
//             <div style={slide.style} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>{slide.title}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <div className='flex justify-center mt-4'>
//         <div className='flex w-[1128px] h-[48px]'>
//           <div className='flex justify-between items-center w-full'>
//             <div className='flex items-center h-[48px] w-[85px]'>
//               <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
//               <span>/{sliderData.length}</span>
//             </div>
//             <div className="arrows-container flex gap-3 mt-4">
//               <CustomPrevArrow onClick={goToPrev} />
//               <CustomNextArrow onClick={goToNext} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// }

// export default CustomArrows;





// import React, { useRef, useState } from 'react';
// import Slider from 'react-slick';
// import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import About11 from '../images/aboutImg/About11.jpg'
// import About12 from '../images/aboutImg/About12.jpeg'
// import About13 from '../images/aboutImg/About13.jpeg'

// // Slider data
// const sliderData = [
//   { id: 1, style: { backgroundImage: `url(${About11})` }, title: 'Head Chef' },
//   { id: 2, style: { backgroundImage: `url(${About12})` }, title: 'Assistant Chef' },
//   { id: 3, style: { backgroundImage: `url(${About13})` }, title: 'Assistant Chef' },
// ];

// // Custom Arrow components
// const CustomNextArrow = ({ onClick }) => (
//   <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer' onClick={onClick}>
//     <IoMdArrowRoundForward />
//   </div>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer' onClick={onClick}>
//     <IoMdArrowRoundBack />
//   </div>
// );

// const CustomArrows = () => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of current slide index

//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update currentSlide when slide changes
//     afterChange: (index) => setCurrentSlide(index),
//         responsive: [
//           { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
//           { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
//           { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
//         ]
//   };

//   const goToNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const goToPrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="slider-container bg-orange-600 flex flex-col px-6 lg:px-40 gap-[40px] h-[650px] w-full">
//       <Slider ref={sliderRef} {...settings}>
//         {sliderData.map(slide => (
//           <div key={slide.id} className='flex flex-col items-center md:flex-row md:justify-center gap-[30px] bg-yellow-700'>
//             <div style={slide.style} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
//               <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
//                 <div className='text-white absolute bottom-5 left-5 font-bold'>
//                   <p>{slide.title}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <div className='flex justify-center mt-4'>
//         <div className='flex w-[1128px] h-[48px]'>
//           <div className='flex justify-between items-center w-full'>
//             <div className='flex items-center h-[48px] w-[85px]'>
//               <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
//               <span>/{sliderData.length}</span>
//             </div>
//             <div className="arrows-container flex gap-3 mt-4">
//               <CustomPrevArrow onClick={goToPrev} />
//               <CustomNextArrow onClick={goToNext} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// }

// export default CustomArrows;




import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About11 from '../images/aboutImg/About11.jpg';
import About12 from '../images/aboutImg/About12.jpeg';
import About13 from '../images/aboutImg/About13.jpeg';

// Slider data
const sliderData = [
  { id: 1, style: { backgroundImage: `url(${About11})` }, title: 'Head Chef' },
  { id: 2, style: { backgroundImage: `url(${About12})` }, title: 'Assistant Chef' },
  { id: 3, style: { backgroundImage: `url(${About13})` }, title: 'Assistant Chef' },
];

// Custom Arrow components
const CustomNextArrow = ({ onClick }) => (
  <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer' onClick={onClick}>
    <IoMdArrowRoundForward />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center cursor-pointer' onClick={onClick}>
    <IoMdArrowRoundBack />
  </div>
);

const CustomArrows = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of current slide index

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update currentSlide when slide changes
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container mt-6 px-6 lg:px-40 w-full">
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map(slide => (
          <div className=''>
            <div key={slide.id} className='flex items-center justify-between'>
              <div style={slide.style} className='relative bg-cover mx-3 h-[450px] w-[300px] md:h-[512px] md:w-[340px] transition-background-image duration-500 ease-in-out rounded-lg'>
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
                  <div className='text-white absolute bottom-5 left-5 font-bold'>
                    <p>{slide.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center mt-4'>
        <div className='flex w-[1128px] h-[48px]'>
          <div className='flex justify-between items-center w-full mx-3'>
            <div className='flex items-center h-[48px] w-[85px]'>
              <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
              <span>/{sliderData.length}</span>
            </div>
            <div className="arrows-container flex gap-3 mt-4">
              <CustomPrevArrow onClick={goToPrev} />
              <CustomNextArrow onClick={goToNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomArrows;
