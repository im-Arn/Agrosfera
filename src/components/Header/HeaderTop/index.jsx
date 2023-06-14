import HeaderContact from './HeaderContact';
import HeaderTopNavigation from './HeaderTopNavigation';
import { ContentZone } from '@/components/ui';

const HeaderTop = () => {

  const nav = [
    {
      name: 'Доставка',
      route: '/',
    },
    {
      name: 'Контакты',
      route: '/',
    },
    {
      name: 'Профиль',
      route: '/',
    },
  ];

  const cartSum = 6;

  return (
      <section className='bg-[#EEEEEE]'>
        <ContentZone>
        <div className='max-w-[1300px] h-[39px] md:h-[45px] mx-auto bg-[#EEEEEE] flex items-center justify-between text-[#5D5E61]'>
          <HeaderContact />
          <HeaderTopNavigation nav={nav} cartSum={cartSum} />
        </div>
        </ContentZone>
      </section>
  );
};

export default HeaderTop;
