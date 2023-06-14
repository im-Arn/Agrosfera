'use client';
import React, { useState } from 'react';
import { Title2 } from '@/components/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import AdvantagesItem from './AdvantagesItem';
import { BigGreen, ppl } from '@/assets/images/MainPage';

const MainAdvantages = () => {
  const titles1 = [
    {
      title: 'Команда профессионалов',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
    },
    {
      title: 'Более 10 лет на рынке',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content'
    }
  ];

  const titles2 = [
    {
      title: 'Команда профессионалов',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
    },
    {
      title: 'Более 10 лет на рынке',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content'
    }
  ];

  const slide1 = [BigGreen, ppl, BigGreen, ppl];
  const slide2 = [ppl, BigGreen, ppl, BigGreen, ppl];

  const [isOpen, setIsOpen] = useState(1);

  const toggleTab1 = () => {
    setIsOpen(1);
  };

  const toggleTab2 = () => {
    setIsOpen(2);
  };

  return (
    <section className='w-full mt-[28px] lg:mt-[152px] pb-[60px] lg:pb-[30px] flex flex-col border-b-[1px] border-[#С4С4С4] bg-[#ffffff]'>
      <Title2>Ключевые показатели</Title2>
      <nav className='w-full pt-[33px] lg:pt-[60px] flex flex-row'>
        <button className={`w-full h-[32px] lg:h-[34px] ${isOpen === 1 ? 'border-b-[2px] border-[#66B463]' : ''}
      transition-all duration-75 ease-linear
      flex justify-start align-start`} onClick={toggleTab1}>
          <p className={`text-[16px] leading-[19px] font-medium
         ${isOpen === 1 ? 'text-[#66B463]' : 'text-[#C4C4C4]'} transition-all duration-75 ease-linear`}>10 лет на рынке</p>
        </button>
        <button className={`w-full h-[32px] lg:h-[34px] ${isOpen === 2 ? 'border-b-[2px] border-[#66B463]' : ''}
      transition-all duration-75 ease-linear 
      flex justify-start align-start`} onClick={toggleTab2}>
          <p className={`text-[16px] leading-[19px] font-medium
         ${isOpen === 2 ? 'text-[#66B463]' : 'text-[#C4C4C4]'} transition-all duration-75 ease-linear`}>Предприятия</p>
        </button>
      </nav>
      <div className='w-full transition-all duration-300 pt-[29px] lg:pt-[30px] ease-linear'>
        {isOpen === 1 &&
          <article className='w-full flex flex-col lg:flex-row lg:justify-between gap-[30px] md:gap-[20px]'>
            <ul className='w-full max-w-[444px] flex flex-col lg:self-center gap-[15px] lg:gap-[71px]'>
              {titles1.map(({ title, subtitle }, index) => (
                <AdvantagesItem title={title} subtitle={subtitle} key={index} />))}
            </ul>
            <div className='w-full max-w-[590px] h-[550px] bg-[#C4C4C4] rounded-md pb-[13px] self-center lg:self-start text-center'>
              <Swiper
                grabCursor
                slidesPerView={1}
                spaceBetween={0}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                initialSlide={0}
              >
                {slide1.map((slide, index) => (
                  <SwiperSlide className='w-full max-w-[590px] h-[550px]' key={index}>
                    <div className='w-full max-w-[590px] h-[550px]'>
                      <Image
                        src={slide}
                        alt='поразительные слайды'
                        className='w-full h-full rounded-md'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </article>
        }
        {isOpen === 2 &&
          <article className='w-full flex flex-col lg:flex-row lg:justify-between gap-[30px] md:gap-[20px]'>
            <ul className='w-full max-w-[444px] flex flex-col lg:self-center gap-[15px] lg:gap-[71px]'>
              {titles2.map(({ title, subtitle }, index) => (
                <AdvantagesItem title={title} subtitle={subtitle} key={index} />))}
            </ul>
            <div className='w-full max-w-[590px] h-[550px] bg-[#66B463] rounded-md pb-[13px] self-center lg:self-start text-center'>
              <Swiper
                grabCursor
                slidesPerView={1}
                spaceBetween={0}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                initialSlide={0}
              >
                {slide2.map((slide, index) => (
                  <SwiperSlide className='w-full max-w-[590px] h-[550px]' key={index}>
                    <div className='w-full max-w-[590px] h-[550px]'>
                      <Image
                        src={slide}
                        alt='поразительные слайды'
                        className='w-full h-full rounded-md'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </article >
        }
      </div >
    </section >
  );
};

export default MainAdvantages;
