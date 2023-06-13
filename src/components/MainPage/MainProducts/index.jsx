import Accordion from './Accordion';
import Link from 'next/link';
import { Title2 } from '../../ui';
import { BigGreen } from '../../../assets/images/MainPage';
// import Image from 'next/image';

const MainProducts = () => {
  const products = [
    {
      title: 'Мебельный Спабонд',
      subtitle: 'Компания «Агросфера» была основана в январе 2017 года. Основным направлением деятельности является производство и поставка укрывных материалов и полиэтиленовой пленки, а также сопутствующих товаров.',
      href: '/',
      img: BigGreen
    },
    {
      title: 'Укрывной материал',
      subtitle: 'Наша компания реализует инновационные материалы, без которых сегодня невозможно выполнить базовые технологические процессы в строительстве, производстве, сельском хозяйстве, легкой промышленности и многих других отраслях.',
      href: '/',
      img: BigGreen
    },
    {
      title: 'Геотекстиль ',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      href: '/',
      img: BigGreen
    },
    {
      title: 'Геотекстиль Ак Дорнит',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      href: '/',
      img: BigGreen
    },
  ];

  return (
    <section className='w-full mt-[60px] mb-[60px] flex flex-col gap-[28px] px-[25px] xl:px-[0px]'>
      <div className="lg:min-h-[229px] lg:pt-[5px]  flex flex-col lg:flex-row lg:justify-between gap-[30px] ">
        <Title2>Продукция</Title2>
        <p className='w-full lg:w-[48%] h-min text-[14px] leading-[18px] md:text-[24px] md:leading-[31px] font-normal '>
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
        </p>
      </div>
      <div className='w-full flex items-stretch'>
        <div className='w-full lg:w-[52%]'>
          <ul className='flex flex-col gap-[1px] bg-[#c4c4c4]'>
            {products.map(({ title, subtitle, href, img }, index) => (
              <Accordion title={title} subtitle={subtitle} href={href} img={img} key={index} />))}
          </ul>
          <div className='w-full h-[83px] lg:h-[83px] flex flex-col justify-center lg:pr-[40px]'>
            <Link href={'/'} className='w-fit pb-[5px] text-[14px] leading-[14px] md:text-[18px] md:leading-[18px] text-[#000000] md:text-[#66B463]
       border-b-[1px] border-[#898989] md:border-[#66B463]
       md:self-end md:mr-[37px]'>
              Посмотреть все материалы
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex w-[48%] bg-[#000000]'>
          {/* <Image
            className='w-full h-full'
            src={BigGreen}
            alt='иконка стрелки'
          /> */}
        </div>
      </div>
    </section >
  );
};

export default MainProducts;
