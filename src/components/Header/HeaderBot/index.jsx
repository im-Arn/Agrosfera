'use client';
import Image from 'next/image';
import Button from '../../ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import HeaderHamburgerMenu from '../HeaderHamburgerMenu';
import HeaderBotNavList from '../HeaderBot/HeaderBotNavList';
import { burger, logoHeader, hBox, hGroup, hContact, hHome, descOpt } from '../../../assets/images/Header';

const HeaderBot = () => {

  const dataNavMob = [
    {
      name: 'Главная',
      img: hHome,
      route: '/',
    },
    {
      name: 'Категории',
      img: hGroup,
      route: '/',
    },
    {
      name: 'Оптовые поставки',
      img: hContact,
      route: '/',
    },
    {
      name: 'Контакты',
      img: hContact,
      route: '/',
    },
    {
      name: 'Оплата и доставка',
      img: hBox,
      route: '/',
    },
  ];

  const dataNavDesc = [
    {
      name: 'Главная',
      route: '/',
    },
    {
      name: 'Мебельный Спанбонд',
      route: '/',
    },
    {
      name: 'Укрывной спанбонд',
      route: '/',
    },
    {
      name: 'Оптовые поставки',
      img: descOpt,
      route: '/',
    },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <section className='mx-auto max-w-[1300px] h-[66px] md:h-[110px] px-[25px] xl:px-[0px] flex items-center justify-between'>
      <Image
        className='w-[40%] max-w-[125px] md:w-[157px] xl:w-[210px]'
        src={logoHeader}
        alt='лого АгроСфера'
      />
      <HeaderBotNavList data={dataNavDesc} />

      <div className='w-[56%] max-w-[174px] md:max-w-[240px] flex'>
      {/* <Link href={'/'} className='mr-[28px] lg:mr-[0px]'>
          <Button
            variant='black'
            className='w-[124px] md:w-[180px] xl:w-[239px] h-[30px] md:h-[44px]
        text-white text-[10px] leading-[10px] md:text-[14px] md:leading-[14px] '
          >
            Оставить заявку
          </Button>
        </Link> */}

        <Link href={'/'} className='mr-[8%] lg:mr-[0px]'>
          <Button
            variant='black'
            className='w-[124px] md:w-[180px] xl:w-[239px] h-[30px] md:h-[44px]
        text-white text-[10px] leading-[10px] md:text-[14px] md:leading-[14px] '
          >
            Оставить заявку
          </Button>
        </Link>

        {/* mobile */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className='lg:hidden'
        >
          <Image
            onClick={() => setIsOpenMenu(true)}
            className='w-[22px]'
            src={burger}
            alt='Меню в виде гамбургера'
          />
        </motion.button>
        {isOpenMenu && <HeaderHamburgerMenu setIsOpenMenu={setIsOpenMenu} data={dataNavMob} />}
      </div>
    </section>
  );
};

export default HeaderBot;
