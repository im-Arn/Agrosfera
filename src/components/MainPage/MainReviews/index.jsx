'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mn, Wm } from '@/assets/images/Reviews';

const MainReviews = () => {

  const reviews = [
    {
      title: 'Качественно и оперативно, используя новейшие материалы и технологии',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      person: 'Илья Митронин',
      job: 'Директор',
      img: Mn
    },
    {
      title: 'Оперативно и качественно, используя новейшие материалы и технологии',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      person: 'Олег Олег',
      job: 'Директор',
      img: Mn

    },
    {
      title: 'Используя новейшие материалы и технологии',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      person: 'Евдокия Евдокиевна',
      job: 'Директор',
      img: Wm
    }
  ];

  return (
    <section className='w-full mt-[56px] mb-[165px] lg:mt-[161px] flex flex-col gap-[19px] lg:gap-[56px]'>
      <h2 className='max-w-[310px] mb-[11px] lg:mb-[0px] md:max-w-[450px] text-[30px] leading-[30px] md:text-[44px] md:leading-[44px] font-bold text-[#000000]'>
        Отзывы довольных клиентов
      </h2>
      <article className='w-full flex flex-col md:flex-row gap-[15px] lg:gap-[0px]'>
        <div className='w-full md:max-w-[50%] lg:w-[55%] 2xl:w-[449px] h-[484px] lg:h-[642px] overflow-hidden relative'>
          <iframe
            style={{ width: '100%', height: '100%', border: '1px solid #e6e6e6', borderRadius: '8px', boxSizing: 'border-box' }}
            src="https://yandex.ru/maps-reviews-widget/203189565021?comments"
          ></iframe>
          <a
            href="https://yandex.ru/maps/org/khram_voskreseniya_khristova_spas_na_krovi/203189565021/"
            target="_blank"
            style={{
              boxSizing: 'border-box',
              textDecoration: 'none',
              color: '#b3b3b3',
              fontSize: '10px',
              fontFamily: 'YS Text, sans-serif',
              padding: '0 20px',
              position: 'absolute',
              bottom: '8px',
              width: '100%',
              textAlign: 'center',
              left: '0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
              maxHeight: '14px',
              whiteSpace: 'nowrap',
            }}
          >
            Храм Воскресения Христова Спас на Крови на карте Санкт-Петербурга — Яндекс Карты
          </a>
        </div>
        <div className='w-full md:max-w-[50%] lg:max-w-[60%] xl:max-w-[840px] border-y-[1px] border-[#C4C4C4]'>
          <Swiper
            grabCursor
            slidesPerView={1}
            spaceBetween={10}
            slidesOffsetBefore={0}
            slidesOffsetAfter={16}
            initialSlide={0}
          >
            {reviews.map(({ title, subtitle, img, person, job }, index) => (
              <SwiperSlide className='max-w-[840px]' key={index}>
                <div className='w-full pr-[33px] py-[36px] lg:py-[42px] lg:pl-[30px] flex flex-col gap-[27px] lg:gap-[42px]'>
                  <p className='text-[13px] leading-[17px] lg:text-[16px] lg:leading-[21px] font-normal 
                  text-[#C4C4C4] text-[#5D5E61]'>{index + 1} &mdash;&mdash;&mdash; {reviews.length}</p>
                  <div className='w-full flex flex-col xl:flex-row gap-[27px]'>
                    <div className='w-full lg:ml-[39px] xl:w-[235px] flex lg:flex-col gap-[15px] lg:gap-[20px]'>
                      <Image
                        src={img}
                        alt={`Фотография ${person}`}
                        className='h-[80px] w-[69px] xl:h-[273px] xl:w-[235px] rounded'
                      />
                      <div className='flex flex-col xl:w-[235px] gap-[7px] lg:gap-[10px]'>
                        <h5 className='pt-[1px] text-[24px] leading-[26px] lg:text-[21px] lg:leading-[23px] font-bold text-[#000000]'>{person}</h5>
                        <p className='text-[12px] leading-[13px] lg:text-[14px] lg:leading-[15px] font-normal text-[#898989]'>{job}</p>
                      </div>
                    </div>
                    <div className='w-full lg:pl-[22px] flex flex-col gap-[21px]'>
                      <h4 className='text-[24px] leading-[24px] lg:text-[36px] lg:leading-[36px] font-bold text-[#2E2E2E]'>
                        {title}
                      </h4>
                      <p className='pb-[7px] text-[14px] leading-[18px] lg:text-[16px] lg:leading-[21px] font-normal text-[#2E2E2E]'>{subtitle}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
      <div className='w-full'>
        <Link href={'/'} className='text-[14px] leading-[15px] md:hidden font-normal border-b-[1px] border-[#000000]'>Cмотреть все отзывы</Link>
        <Link href={'/'} className='hidden w-fit md:flex text-[14px] leading-[15px] text-[#969696] font-normal border-b-[1px] border-[#969696]'>Cмотреть все письма PDF</Link>
      </div>
    </section>
  );
};

export default MainReviews;
