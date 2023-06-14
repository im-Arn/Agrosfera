import Link from 'next/link';
import Image from 'next/image';
import { hArrow } from '@/assets/images/Header';

const HamburgerNavigationItem = ({ name, route, img }) => {
  return (
    <li className='flex items-center w-[100%] h-[56px]'>
      <Link
        className='w-full h-full px-[25px] flex items-center
        text-left font-normal text-[16px] leading-[20px]
        hover:bg-[#F0F0F0]'
        href={route}
      >
        <Image
          className='w-[33px] mr-[15px]'
          src={img}
          alt={`иконка ${name}`}
        />
        {name}
        <Image
          className='w-[24px] ml-auto'
          src={hArrow}
          alt={`иконка ${name}`}
        />
      </Link>
    </li>
  );
};

export default HamburgerNavigationItem;
