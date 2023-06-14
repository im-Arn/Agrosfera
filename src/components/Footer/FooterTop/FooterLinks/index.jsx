import FooterList from './FooterList';
import { SocInsta, SocFB, SocYoutube, SocLinkedin } from '@/assets/images/Footer';

const FooterLinks = () => {

  const list1 = [
    {
      name: 'О компании',
      href: '/'
    },
    {
      name: 'Контакты',
      href: '/'
    },
    {
      name: 'Оплата и доставка',
      href: '/'
    },
    {
      name: 'Оптовые поставки',
      href: '/'
    },
  ];

  const list2 = [
    {
      name: 'Мебельный Спабонд',
      href: '/'
    },
    {
      name: 'Укрывной материал',
      href: '/'
    },
    {
      name: 'Геотекстиль Ак Дорнит',
      href: '/'
    },
    {
      name: 'Геотекстиль',
      href: '/'
    },
  ];

  const list3 = [
    {
      name: 'Instagram',
      img: SocInsta,
      href: '/'
    },
    {
      name: 'Facebook',
      img: SocFB,
      href: '/'
    },
    {
      name: 'Youtube',
      img: SocYoutube,
      href: '/'
    },
    {
      name: 'linkedin',
      img: SocLinkedin,
      href: '/'
    },
  ];

  return (
    <article className='sm:w-[70%] md:w-[45%] lg:w-[58%] flex flex-row flex-wrap justify-between text-center md:mt-0 gap-x-[75px] gap-y-[32px]'>
      <FooterList links={list1} title='О компании' />
      <FooterList links={list2} title='Продукция' />
      <FooterList links={list3} title='Следи за нами' variant='social'/>
    </article>
  );
};
export default FooterLinks;
