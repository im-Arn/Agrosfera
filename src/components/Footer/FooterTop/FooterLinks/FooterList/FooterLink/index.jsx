import Link from 'next/link';
import Image from 'next/image';

const FooterLink = ({ name, img, href}, key ) => {
  if (img) {
    return (
      <>
        <li key={key} className='hidden md:flex'>
          <Link href={href}>
            <p className=' bg-transparent whitespace-nowrap text-[14px] leading-[14px]'>{name}</p>
          </Link >
        </li>
        <li key={key} className='flex md:hidden h-[26px]'>
          <Link href={href}>
            <button
              className='h-[26px] w-[26px] md:hidden bg-transparent'
            >
              <Image
                className='w-[26px] h-[26px] cursor-pointer'
                src={img}
                alt={`иконка ${name}`}
              />
            </button>
          </Link >
        </li>
      </>
    );
  } else {
    return (
      <li key={key} className='flex'>
        <Link href={href}>
          <p className=' bg-transparent whitespace-nowrap text-[14px] leading-[14px]'>{name}</p>
        </Link >
      </li>
    );
  }
};
export default FooterLink;
