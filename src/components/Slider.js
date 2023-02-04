import React, { useState } from 'react';
import SliderContent from './SliderContent';
import ImageSlider from './ImageSlider';
import Arrows from './Arrows';
import "./Slider.css"



const len = ImageSlider.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlider}/>
            <Arrows
                prevSlide={() => setActiveIndex( activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex( activeIndex === len ? 0 : activeIndex + 1)}
            />
         </div>
        
    );
}

export default Slider;