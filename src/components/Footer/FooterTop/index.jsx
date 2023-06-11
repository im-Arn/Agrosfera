
import FooterInfo from './FooterInfo';
import FooterCallBack from './FooterCallBack';
import FooterLinks from './FooterLinks';
import FooterMarket from './FooterCallBack/FooterMarket';
import FooterCopyright from './FooterCopyright';
import Image from 'next/image';
import Link from 'next/link';
import { LogoDesc } from '../../../assets/images/Footer';

const FooterTop = () => {
  return (
    <section className='w-full bg-[#303030] md:bg-[#222222]'>
      <article className='max-w-[1300px] min-h-[883px] md:min-h-[610px] mx-auto px-[20px] xl:px-[0px] py-[30px] xl:py-[0px] xl:pb-[10px]
    flex flex-col gap-[14px] md:gap-[58px]'>
        <Link href={'/'} className='w-[125px] h-[50px] md:w-[112px] md:h-[45px] my-[8px] md:my-[0px] xl:mt-[60px]'>
          <button className='w-[125px] h-[50px] md:w-[112px] md:h-[45px] bg-transparent'>
            <Image
              className='w-[125px] h-[50px] md:w-[112px] md:h-[45px] cursor-pointer'
              src={LogoDesc}
              alt='логотип Агросфера'
            />
          </button>
        </Link >

        <div className='flex flex-col gap-[30px] md:flex-row justify-between'>
          <FooterLinks />
          <FooterCallBack />
        </div>
        <div className='w-full flex flex-row justify-between my-[16px] md:my-[0px]'>
          <FooterInfo />
          <div className='hidden md:flex mt-[17px]' >
            <FooterMarket />
          </div>
        </div>
        <FooterCopyright />
      </article>
    </section>
  );
};

export default FooterTop;