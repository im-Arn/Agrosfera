import Link from 'next/link';
import Image from 'next/image';

const HeaderBotNavList = ({ data }) => {
  return (
    <nav className='hidden lg:block max-w-[676px] xl:w-[52%] xl:ml-[29px] ' >
      <ul className='max-w-[676px] flex justify-between gap-[10px]'>
        {data.map(({ name, route, img }, index) => (

          <li className='font-normal text-[14px] leading-[14px]' key={index}>
            <Link
              className='w-full h-full flex items-center
        text-left font-normal md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[20px] whitespace-nowrap
        hover:font-bold'
              href={route}
            >
              {img && <Image
                className='w-[15px] mr-[10px]'
                src={img}
                alt={`иконка ${name}`}
              />}
              {name}

            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderBotNavList;