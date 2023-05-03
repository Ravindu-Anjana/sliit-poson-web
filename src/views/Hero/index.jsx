//Hero Section

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

//images
import { imageArray } from '../../data/heroImages.js';

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = imageArray;

  const nextImg = () => {
    if (currentImg + 1 == images.length) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  const prevImg = () => {
    if (currentImg - 1 == -1) {
      setCurrentImg(images.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };

  const clickExplore = () => {
    const element = document.getElementById('vesak-zone');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      id="Hero"
      className="flex flex-col font-poppins items-center justify-center h-screen bg-gradient-to-r from-[#30013B] to-[#510263] dark:bg-none dark:bg-[#1E1E1E]"
    >
      <div className="mt-24 container h-full mx-auto ">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row h-full xl:px-12">
          <div className="flex-1 flex items-center justify-center lg:justify-start basis-full lg:basis-1/2 my-5 mx-4">
            <div>
              <div className="text-5xl text-white font-medium">
                Virtual Vesak <br />
                Festival
                <div className="block md:inline text-gold font-railway font-normal">
                  {' '}
                  202<span className="text-6xl absolute">3</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-gold mt-5 block">
                  SLIIT Interactive Media
                </div>
                <div className="border-b border-gold h-9 ml-2 grow"></div>
              </div>
              <div className="mt-10 lg:mt-20 text-white">
                <div
                  className="border border-gold inline-block px-4 py-3 rounded-3xl cursor-pointer hover:text-gold transition"
                  onClick={clickExplore}
                >
                  <p className="font-sans">
                    Explore Now
                    <FontAwesomeIcon className="ml-8 " icon={faArrowRight} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start  h-[75vh] lg:h-[105vh] basis-full lg:basis-1/2">
            <div className="static rounded-b-full rounded-t-[70rem] w-full mx-4 lg:w-full overflow-hidden ">
              <img
                alt={'image'}
                src={images[currentImg].src}
                className="w-full h-full object-cover "
              />
              <FontAwesomeIcon
                onClick={clickExplore}
                className="absolute hidden lg:block -bottom-5 rounded-full bg-[#48093F] text-gold mr-4 cursor-pointer text-white p-5 dark:bg-gold dark:text-black"
                icon={faArrowDown}
              />
              <div className="absolute rounded-full bg-[#48093F] text-white right-0 top-3/4 lg:top-1/2 lg:right-0 xl:left-auto xl:right-[10vw] px-4 py-2 z-10 dark:bg-[#161616]">
                <FontAwesomeIcon
                  onClick={prevImg}
                  className="text-gold dark:text-white mr-4 cursor-pointer"
                  icon={faArrowLeft}
                />
                <div className="select-none inline">
                  0{currentImg + 1} / 0{images.length}
                </div>
                <FontAwesomeIcon
                  onClick={nextImg}
                  className="text-gold dark:text-white ml-4 cursor-pointer"
                  icon={faArrowRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
