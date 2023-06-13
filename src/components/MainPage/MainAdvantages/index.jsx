'use client';
import React, { useState } from 'react';
import { Title2 } from '../../ui';
import Image from 'next/image';

const MainAdvantages = () => {
  const [isOpen, setIsOpen] = useState(1);

  const toggleTab1 = () => {
    setIsOpen(1);
  };

  const toggleTab2 = () => {
    setIsOpen(2);
  };

  return (
    <section className='w-full px-[25px] lg:px-[0px] flex flex-col gap-[30px] bg-[#ffffff]'>
      <Title2>Ключевые показатели</Title2>
      <nav className='w-full flex flex-row'>
        <button className={`w-full h-[30px] lg:h-[30px] ${isOpen === 1 ? 'border-b-[2px] border-[#66B463]' : ''}
      transition-all duration-75 ease-linear
      flex justify-start align-start`} onClick={toggleTab1}>
          <p className={`text-[16px] leading-[20px] md:text-[24px] md:leading-[24px] font-medium
         ${isOpen === 1 ? 'text-[#66B463]' : 'text-[#C4C4C4]'} transition-all duration-75 ease-linear`}>10 лет на рынке</p>
        </button>
        <button className={`w-full h-[30px] lg:h-[30px] ${isOpen === 2 ? 'border-b-[2px] border-[#66B463]' : ''}
      transition-all duration-75 ease-linear 
      flex justify-start align-start`} onClick={toggleTab2}>
          <p className={`text-[16px] leading-[20px] md:text-[24px] md:leading-[24px] font-medium
         ${isOpen === 2 ? 'text-[#66B463]' : 'text-[#C4C4C4]'} transition-all duration-75 ease-linear`}>Предприятия</p>
        </button>
      </nav>
      <div className='w-full pt-[30px] transition-all duration-300 ease-linear'>
        {isOpen === 1 &&
          <article className='w-full flex flex-col gap-[30px] md:gap-[20px]'>
            <ul className='w-full flex flex-col gap-[15px]'>
              <li className='w-full flex flex-col gap-[15px]'>
                <h4 className='  text-[18px] heading-[22px] md:text-[24px] md:heading-[29px] text-[#000000] font-bold'>Команда профессионалов</h4>
                <p className='text-[14px] heading-[18px] text-[#000000] font-normal text-[#2E2E2E]'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                </p>
              </li>
              <li className='w-full flex flex-col gap-[15px]'>
                <h4 className='  text-[18px] heading-[22px] md:text-[24px] md:heading-[29px] text-[#000000] font-bold'>Более 10 лет на рынке</h4>
                <p className='text-[14px] heading-[18px] text-[#000000] font-normal text-[#2E2E2E]'>
                  It is a long established fact that a reader will be distracted by the readable content
                </p>
              </li>
            </ul>
            <div className='w-full max-w-[590px] h-[550px] lg:hidden bg-[#C4C4C4] pb-[13px] text-center'>slide
            </div>
          </article>
        }
        {isOpen === 2 &&
          <article className={`w-full lg:mb-[15px] lg:pt-[15px] flex flex-col gap-[30px] md:gap-[20px] transition-all duration-300 ease-linear 
                    text-white`}>
            <ul className='w-full flex flex-col gap-[15px]'>
              <li className='w-full flex flex-col gap-[15px]'>
                <h4 className='  text-[18px] heading-[22px] md:text-[24px] md:heading-[29px] text-[#000000] font-bold'>Команда профессионалов</h4>
                <p className='text-[14px] heading-[18px] text-[#000000] font-normal text-[#2E2E2E]'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                </p>
              </li>
              <li className='w-full flex flex-col gap-[15px]'>
                <h4 className='  text-[18px] heading-[22px] md:text-[24px] md:heading-[29px] text-[#000000] font-bold'>Более 10 лет на рынке</h4>
                <p className='text-[14px] heading-[18px] text-[#000000] font-normal text-[#2E2E2E]'>
                  It is a long established fact that a reader will be distracted by the readable content
                </p>
              </li>
            </ul>
            <div className='w-full max-w-[590px] h-[550px] lg:hidden bg-[#66B463] pb-[13px]'>
            </div>
          </article>
        }
      </div>
    </section>
  );
};

export default MainAdvantages;

{/* <div className={`max-w-[0%] pt-[10px] lg:mb-[15px] lg:pt-[15px] flex flex-col gap-[10px] md:gap-[20px] overflow-hidden transition-all duration-300 ease-linear 
text-white ${isOpen === 'tab1' ? 'max-w-full' : ''}`}>
    <h4></h4>
    <p className='lg:mb-[10px] text-[14px] leading-[17px] md:text-[16px] md:leading-[21px] font-normal text-[#2E2E2E]'>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
    </p>
    <div className='w-full lg:hidden pb-[13px]'>
      <Image
      className='object-contain w-full max-h-[300px] rounded'
      src={img}
      alt={`изображение ${title}`}
    /> 
    </div>
  </div> */}
