import React from 'react'
import { useEffect, useState } from 'react';
import storyData from 'api/Story.json'
import Slider from "react-slick";

const Story = () => {


    const [story, setStory] = useState([]);

    useEffect(() => {
        setStory(storyData)
    });


    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10
    };

    return (
        <div className='story'>
            <Slider {...settings}>
                {story.length && story.map(story => (
                    <a href="." className='text-sm p-5 flex flex-col items-center text-center text-black  hover:text-orange-600 group'>
                        <img src={story.image}
                            width={68}
                            alt=""
                            className='items-center border border-gray-600 rounded-full cursor-pointer hover:border-orange-600 duration-300 group-hover:scale-105'
                        />
                        <p className='mt-1'>{story.title}</p>
                    </a>
                ))}
            </Slider>
        </div>
    )
}

export default Story
