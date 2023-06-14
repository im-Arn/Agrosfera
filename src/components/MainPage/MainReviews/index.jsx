'use client';
// import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MainReviews = () => {

  const reviews = [
    {
      title: 'Качественно и оперативно, используя новейшие материалы и технологии',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      person: 'Илья Илья'
    },
    {
      title: 'Оперативно и качественно, используя новейшие материалы и технологии',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      person: 'Олег Олег'
    },
    {
      title: 'Используя новейшие материалы и технологии',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      person: 'Евдокия Евдокиевна'
    }
  ];

  return (
    <section className='w-full mt-[58px] lg:mt-[120px] px-[25px] flex flex-col gap-[31px]'>
      <h2 className='max-w-[310px] md:max-w-[450px] text-[30px] leading-[30px] md:text-[44px] md:leading-[44px] font-bold text-[#000000]'>
        Отзывы довольных клиентов
      </h2>
      <article className='w-full flex flex-col lg:flex-row gap-[15px] lg:gap-[10px]'>
        <div className='w-full max-w-[449px] h-[484px] lg:h-[642px] overflow-hidden relative'>
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
        <Swiper
          grabCursor
          slidesPerView={1}
          spaceBetween={10}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          initialSlide={1}   
        >
          {reviews.map(({title, subtitle}, index) => (
            <SwiperSlide key={index} className="">
              <div className="">
                {/* <Image
                  src={review.image}
                  alt="Картинка у полезной статьи"
                  className="h-[308px] w-[308px]"
                  width={69}
                  height={80}
                /> */}
                <h4 className="mt-[13px] line-clamp-3 text-[10px] leading-[12px] text-full-white md:text-[14px] md:leading-[20px] xl:mt-[30px] xl:text-[16px]">
                  {title}
                </h4>
                <p>{subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
};

export default MainReviews;
