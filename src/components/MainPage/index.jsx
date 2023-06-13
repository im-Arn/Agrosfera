import Header from '../Header/';
import Footer from '../Footer';
import MainPriceList from './MainPriceList';
import MainAchievements from './MainAchievements';
import MainProducts from './MainProducts';
import MainAbout from './MainAbout';
import MainOrder from './MainOrder';
import MainFeature from './MainFeature';
import MainAdvantages from './MainAdvantages';
// import Image from 'next/image';
// import { BigGreen } from '../../assets/images/MainPage';
// import { Title2, Button } from '../ui';

const MainPage = () => {

  return (
    <>
      <Header />
      <main className='max-w-[1300px] mx-auto'>
        <section className='max-w-[902px] px-[25px] xl:px-[0px] flex flex-col md:flex-row md:justify-between md:items-center'>
          <h1 className='text-[60px] leading-[60px] md:text-[105px] md:leading-[105px] lg:text-[120px] lg:leading-[133px] font-bold -tracking-[.005em]'>АгроСфера</h1>
          <p className='h-min text-[18px] leading-[22px] font-medium pt-[22px] md:pt-[20px] tracking-[.007em]'>Ваш надежный поставщик <br></br>Укрывных материалов</p>
        </section>
        <MainPriceList />
        <MainAchievements />
        <MainProducts />
        <MainAbout />
        <MainAdvantages />
        <MainFeature>Предложение для оптовиков и перекупов </MainFeature>
        <MainOrder />
        <section className='mt-[60px] w-full h-[502px] bg-[#F9F9F9] flex flex-col justify-center items-center  border-[2px] border-[##898989] rounded-xl'>
          <p className='text-[36px] leading-[43px] text-bold text-[#C8C8C8]'>Контакты</p>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default MainPage;
