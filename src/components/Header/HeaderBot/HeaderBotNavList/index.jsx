'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const HeaderBotNavList = ({ data }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className='hidden lg:block max-w-[676px] xl:w-[52%] xl:ml-[29px] ' >
      <ul className='max-w-[676px] flex justify-between gap-[10px]'>
        {data.map(({ name, route, img, list }, index) => (

          <li className='font-normal text-[14px] leading-[14px] relative'
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              className='w-full h-full flex items-center
        text-left font-normal md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[20px] whitespace-nowrap
        hover:font-bold transition-all duration-100 ease-linear'
              href={route}
            >
              {img && <Image
                className='w-[15px] mr-[10px]'
                src={img}
                alt={`иконка ${name}`}
              />}
              {name}

            </Link>
            {list && hoveredItem === index && (
              <nav className='absolute -right-4 w-[154px] py-[10px] px-[10px] bg-[#ffffff] shadow-md rounded-b-md border-t-[1px] border-[#7BB949]'>
                <ul className='w-full flex flex-col bg-[#E8E8E8] gap-[1px]'>
                  {list.map(({ title, route }, index) => (
                    <li className='bg-[#ffffff] py-[8px]' key={index}>
                      <Link href={route}>
                        <p className='text-[14px] text-[#5D5E61] hover:text-[#7BB949]'>{title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderBotNavList;

{/* <div className='w-[100px] h-[10px] bg-[#000000]'></div> */ }
