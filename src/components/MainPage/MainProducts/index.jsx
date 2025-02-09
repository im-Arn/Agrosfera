'use client';
import React, { useState } from 'react';
import Accordion from './Accordion';
import Link from 'next/link';
import { Title2 } from '@/components/ui';
import { BigGreen, ppl } from '@/assets/images/MainPage';
import Image from 'next/image';

const MainProducts = () => {
  const products = [
    {
      title: 'Мебельный Спабонд',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      href: '/',
      img: BigGreen
    },
    {
      title: 'Укрывной материал',
      subtitle: 'Наша компания реализует инновационные материалы, без которых сегодня невозможно выполнить базовые технологические процессы в строительстве, производстве, сельском хозяйстве, легкой промышленности и многих других отраслях.',
      href: '/',
      img: ppl
    },
    {
      title: 'Геотекстиль ',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      href: '/',
      img: BigGreen
    },
    {
      title: 'Геотекстиль Ак Дорнит',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      href: '/',
      img: ppl
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className='w-full mt-[55px] mt-[55px] lg:mt-[160px] mb-[60px] flex flex-col gap-[26px]'>
      <div className="lg:min-h-[229px] lg:pt-[5px]  flex flex-col lg:flex-row lg:justify-between gap-[32px] ">
        <Title2>Продукция</Title2>
        <p className='w-full lg:w-[48%] h-min text-[14px] leading-[18px] md:text-[24px] md:leading-[31px] font-normal '>
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
        </p>
      </div>
      <div className='w-full lg:h-[550px] flex transition-all duration-75 ease-linear'>
        <div className='w-full lg:w-[52%]'>
          <ul className='flex flex-col gap-[1px] bg-[#c4c4c4]'>
            {products.map(({ title, subtitle, href, img }, index) => (
              <Accordion
                title={title}
                subtitle={subtitle}
                href={href}
                img={img}
                key={index}
                isOpen={activeIndex === index}
                onToggle={() => toggleAccordion(index)} />))}
          </ul>
          <div className='w-full h-[78px] lg:h-[83px] flex flex-col justify-center lg:pr-[40px]'>
            <Link href={'/'} className='w-fit pb-[5px] text-[14px] leading-[14px] md:text-[18px] md:leading-[18px] text-[#000000] md:text-[#66B463]
       border-b-[1px] border-[#898989] md:border-[#66B463]
       md:self-end md:mr-[37px] md:mb-[10px]'>
              Посмотреть все материалы
            </Link>
          </div>
        </div>
        <div className='hidden lg:block w-[48%]'>
          <Image
            className='hidden lg:block w-full aspect-[316/275]'
            src={activeIndex !== null ? products[activeIndex].img : BigGreen}
            alt='изображения продукции'
          />
        </div>
      </div>
    </section >
  );
};

export default MainProducts;
