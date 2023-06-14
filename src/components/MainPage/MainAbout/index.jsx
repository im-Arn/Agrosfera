import Link from 'next/link';
import { Title2 } from '../../ui';
import { ppl } from '../../../assets/images/MainPage';
import Image from 'next/image';
import AboutItem from './AboutItem';

const MainAbout = () => {
  const about = [
    {
      title: 'Собственное производство',
      subtitle: 'Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ',
    },
    {
      title: 'Любой объем,ширина,цвет',
      subtitle: 'Благодаря СОБСТВЕННОМУ ПРОИЗВОДСТВУ МЫ В КРАТЧАЙШИЕ СРОКИ РЕАЛИЗУЕМ ВАШ ЗАКАЗ',
    },
    {
      title: 'Специальные условия для новых клиентов',
      subtitle: 'благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ',
    },
    {
      title: 'Оперативная отгрузка и доставка в любой регион',
      subtitle: 'благодаря СОБСТВЕННОМУ ПРОИЗВОДСТВУ МЫ В КРАТЧАЙШИЕ СРОКИ РЕАЛИЗУЕМ ВАШ ЗАКАЗ',
    },
  ];

  return (
    <section className='w-full mt-[88px] flex flex-col px-[25px] xl:px-[0px]'>
      <Title2>О компании </Title2>
      <article className="mt-[33px] pb-[30px] lg:py-[69px] lg:mt-[56px] border-b-[1px] lg:gap-[10px] lg:border-b-[0px] border-[#c4c4c4]
      flex flex-col lg:flex-row lg:justify-between">
        <Image
          className='w-full h-auto sm:w-[588px] sm:h-[359px] mb-[30px] lg:mb-[0px] rounded'
          src={ppl}
          alt='изображение'
        />
        <div className='w-full max-w-[585px] lg:my-auto flex flex-col gap-[15px] lg:gap-[34px]'>
          <h3 className='hidden lg:block text-[24px] leading-[26px] font-bold'>О компании </h3>
          <p className='w-full h-min text-[14px] leading-[18px] md:text-[16px] md:leading-[21px] font-normal '>
            Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности
            является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.
          </p>
          <p className='w-full h-min text-[14px] leading-[18px] md:text-[16px] md:leading-[21px] font-normal '>
            Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности
            является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.
          </p>
          <Link className='hidden lg:block' href={'/'}>
            <p className='text-[14px] leading-[15px] text-[#969696]'>Подробнее о компании</p>
          </Link >
        </div>
      </article>
      <article className='w-full flex'>
        <ul className='xl:hidden w-full flex flex-col gap-[1px] lg:flex-row bg-[#c4c4c4]'>
          {about.map(({ title, subtitle }, index) => (
            <AboutItem title={title} subtitle={subtitle} key={index} />))}
        </ul>
        <ul className='hidden w-full xl:flex flex-row gap-[1px] bg-[#c4c4c4]'>
          <li className='w-[22.3%] pt-[30px] lg:pt-[4px] py-[29px] lg:pb-[10px] bg-[#ffffff] flex justify-start'>
            <div className='w-full lg:w-[223px] flex flex-col gap-[6px] lg:gap-[22px]'>
              <h4 className='text-[18px] leading-[21px] font-bold'>Собственное производство</h4>
              <p className='text-[14px] leading-[17px] font-normal text-[#5D5E61]'>Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ</p>
            </div>
          </li>
          <li className='w-[358px] pt-[30px] lg:pt-[4px] py-[29px] lg:pb-[10px] bg-[#ffffff] flex justify-center'>
            <div className='w-full lg:w-[223px] flex flex-col gap-[6px] lg:gap-[22px]'>
              <h4 className='text-[18px] leading-[21px] font-bold'>Собственное производство</h4>
              <p className='text-[14px] leading-[17px] font-normal text-[#5D5E61]'>Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ</p>
            </div>
          </li>
          <li className='w-[358px] pt-[30px] lg:pt-[4px] py-[29px] lg:pb-[10px] bg-[#ffffff] flex justify-center'>
            <div className='w-full lg:w-[223px] flex flex-col gap-[6px] lg:gap-[7px]'>
              <h4 className='text-[18px] leading-[21px] font-bold'>Специальные условия для новых клиентов</h4>
              <p className='text-[14px] leading-[17px] font-normal text-[#5D5E61]'>Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ</p>
            </div>
          </li>
          <li className='w-[290px] pt-[30px] lg:pt-[4px] py-[29px] lg:pb-[10px] bg-[#ffffff] flex justify-end'>
            <div className='w-full lg:w-[223px] flex flex-col gap-[6px] lg:gap-[7px]'>
              <h4 className='text-[18px] leading-[21px] font-bold'>Оперативная отгрузка и доставка в любой регион</h4>
              <p className='text-[14px] leading-[17px] font-normal text-[#5D5E61]'>Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ</p>
            </div>
          </li>
        </ul>
      </article>
    </section >
  );
};

export default MainAbout;
