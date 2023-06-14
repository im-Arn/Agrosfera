'use client';
import React, { useState } from 'react';

const ScrollButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`hidden md:block absolute -bottom-[210px] -right-[1px] h-[70px] w-[70px] bg-[#000000] rounded-xl text-white text-[24px] leading-[29px] ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      UP
    </button>
  );
};

export default ScrollButton;
