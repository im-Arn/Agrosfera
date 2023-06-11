import HeaderContact from './HeaderContact';
import HeaderTopNavigation from './HeaderTopNavigation';

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
      <div className='max-w-[1300px] h-[39px] md:h-[45px] mx-auto px-[25px] xl:px-[0px] bg-[#EEEEEE] flex items-center justify-between text-[#5D5E61]'>
        <HeaderContact />
        <HeaderTopNavigation nav={nav} cartSum={cartSum} />
      </div>
    </section>
  );
};

export default HeaderTop;
