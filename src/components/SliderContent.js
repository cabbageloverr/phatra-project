import React from 'react';

function SliderContent({activeIndex, ImageSlider }) {
    return (
        <section>
            {ImageSlider.map((slide,index) => (
            <div key={index} className={index === activeIndex ? "slider active" : "inactive"}>
                <img className ="slide-image" src={slide.urls} alt="" />
                <h2 className = "{slide-title} "> {slide.title}</h2>
            </div>
            ))}
            
            
        </section>
    );
}

export default SliderContent;