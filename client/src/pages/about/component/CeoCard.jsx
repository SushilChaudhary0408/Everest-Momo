


import React from 'react';
import About09 from '../../../images/aboutImg/About09.jpeg';
import CEO from './CEO';
import About10 from "../../../images/aboutImg/About10.jpeg"

function CeoCard() {
    const aboutStyle09 = {
        position: 'relative',
        zIndex: 1, 
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
        zIndex: -1,
    };

    const overlayStyle09 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7))',
        opacity: 0.7,
        zIndex: 0, 
    };

    const textStyle09 = {
        position: 'relative',
        color: 'white',
        zIndex: 1, 
    };

    return (
        <div className='mt-20'>
            <div className='flex flex-col h-[600px] items-center md:flex-row w-full relative inset-0'>
                <div className='w-[100%] md:w-[80%] h-full flex px-6 lg:px-32 items-center' style={aboutStyle09}>
                    <div style={backgroundImageStyle09} className='h-full'></div>
                    <div style={overlayStyle09}></div>
                    <div style={textStyle09} className='flex flex-col items-center w-full'>
                        <CEO />
                    </div>
                </div>
                <div className='flex items-center h-[600px] w-[100%] md:w-[90%] lg:w-[60%] overflow-hidden bg-cover'>
                    <img src={About10} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CeoCard;
