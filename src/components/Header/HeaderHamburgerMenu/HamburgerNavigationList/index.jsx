import Link from 'next/link';
import HamburgerNavigationItem from './HamburgerNavigationItem';

const HamburgerNavigationList = ({ routes }) => {
  return (
    <nav className='flex w-full flex-col items-start justify-start'>
      <p className='mt-[32px] px-[25px] font-bold text-[18px] leading-[24px]'>Меню</p>
      <ul className='w-full mt-[12px] mb-[30px]'>
        {routes.map(({ name, route, img }, index) => (
          <HamburgerNavigationItem name={name} img={img} route={route} key={index} />
        ))}
      </ul>
      <Link href={'/'}>
        <p className='px-[25px] font-normal text-[18px] leading-[24px]'>Помощь</p>
      </Link>
    </nav>
  );
};

export default HamburgerNavigationList;
