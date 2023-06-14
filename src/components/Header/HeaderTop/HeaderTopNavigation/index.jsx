import { cart } from '@/assets/images/Header';
import Image from 'next/image';
import TopItem from '../TopItem';

const HeaderTopNavigation = ({ nav, cartSum }) => {
  return (
    <nav className='w-[373px] flex justify-end md:justify-between'>
      <ul className='w-[290px] hidden md:flex justify-between'>
        {nav.map(({ name, route }, index) => (
          <TopItem link={route} key={index}>{name}</TopItem>
        ))}
      </ul>
      <button
        className='hidden h-[21px] w-[21px] md:w-[32px] md:h-[25px] mr-[9px] items-center justify-center bg-transparent
          relative'
      >
        <div className='h-[18px] w-[18px] md:h-[24px] md:w-[24px] rounded-3xl bg-[#7BB949] flex items-center justify-center 
          text-white font-bold text-[15px] leading-[17px] 
          absolute -top-0 -right-2'>
          <p>{cartSum}</p>
        </div>
        <Image
          className='w-[16px] md:w-[25px] cursor-pointer'
          src={cart}
          alt='иконка корзины'
        />
      </button>
    </nav>
  );
};

export default HeaderTopNavigation;
