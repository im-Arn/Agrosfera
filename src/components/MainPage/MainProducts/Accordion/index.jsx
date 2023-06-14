'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { arrowB, arrowG } from '../../../../assets/images/Accordion';

const Accordion = ({ title, subtitle, img , isOpen, onToggle}, key) => {
  return (
    <li className='w-full pb-[23px] lg:pb-[10px] flex flex-col bg-[#ffffff]' key={key}>
      <button className={`w-full h-[56px] lg:h-[60px] ${isOpen ? 'lg:h-[55px]' : ''} md:pr-[30px] 
      flex justify-between items-end 
      transition-all duration-300 ease-linear`} onClick={onToggle}>
        <h3 className={`text-[16px] heading-[18px] md:text-[24px] md:leading-[24px] ${isOpen ? 'text-[#000000]' : 'text-[#898989]'} transition-all duration-75 ease-linear`}>{title}</h3>
        {!isOpen
          ? <Image
            className='w-[18px] h-[18px] md:w-[27px] md:h-[27px] cursor-pointer'
            src={arrowG}
            alt='иконка стрелки'
          />
          : <Image
            className='w-[18px] h-[18px] md:w-[27px] md:h-[27px] cursor-pointer'
            src={arrowB}
            alt='иконка стрелки'
          />}
      </button>
      <div className={`max-h-[0px] pt-[9px] lg:mb-[15px] lg:pt-[15px] flex flex-col gap-[10px] md:gap-[20px] overflow-hidden transition-all duration-300 ease-linear 
      text-white ${isOpen ? 'max-h-[400px]' : ''}`}>
        <p className='lg:mb-[10px] text-[14px] leading-[17px] md:text-[16px] md:leading-[21px] font-normal text-[#2E2E2E]'>{subtitle}</p>
        <div className='w-full lg:hidden pb-[13px]'>
          <Image
            className='object-contain w-full max-h-[300px] rounded'
            src={img}
            alt={`изображение ${title}`}
          />
        </div>
      </div>
    </li>
  );
};

export default Accordion;
