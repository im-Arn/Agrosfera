import Link from 'next/link';

const TopItem = ({ link, children, key }) => {

  return (
    <li className='flex items-center font-normal text-[12px] leading-[12px] md:text-[14px] md:leading-[14px]' key={key}><Link href={link} className='flex items-center'>{children}</Link></li>
  );
};

export default TopItem;
