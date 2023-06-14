'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import HamburgerNavigationList from './HamburgerNavigationList';
import { closeMenu, logoHeader } from '@/assets/images/Header';
import { Overlay } from '@/components/ui';

const HeaderHamburgerMenu = ({ setIsOpenMenu, data }) => {

  return (
    <Overlay>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          ease: 'linear',
          duration: 0.35,
        }}
      >

        <article className='z-1000'>
          <div
            className='fixed right-0 top-0 z-50 flex h-[100%] w-full max-w-[100%] flex-col items-center bg-white'
          >
            <div className='transition-all w-full h-[66px] px-[25px] flex items-center justify-between'>
              <Link href={'/'}>
                <Image
                  className='w-[125px]'
                  src={logoHeader}
                  alt='лого АгроСфера'
                />
              </Link>
              <Link href={'/'} className='ml-auto'>
                <Button
                  variant='black'
                  className='w-[110px] h-[30px]
              text-white text-[10px] leading-[10px] mr-[10px] sm:mr-[20px]'
                >
                  Оставить заявку
                </Button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  className='h-[15px] w-[15px] cursor-pointer'
                  onClick={() => setIsOpenMenu(false)}
                  src={closeMenu}
                  alt='черный крестик'
                />
              </motion.button>
            </div>
            <HamburgerNavigationList routes={data} />
          </div>
        </article>

      </motion.nav>
    </Overlay>
  );
};

export default HeaderHamburgerMenu;
