import Header from '../Header/';
import Footer from '../Footer';
import MainPriceList from './MainPriceList';
import MainAchievements from './MainAchievements';
import MainProducts from './MainProducts';
import MainAbout from './MainAbout';
import MainOrder from './MainOrder';
import MainFeature from './MainFeature';
import MainAdvantages from './MainAdvantages';
import MainReviews from './MainReviews';
import { ContentZone } from "@/components/ui";

const MainPage = () => {

  return (
    <>
      <Header />
      <main >
        <ContentZone>
          <section className='max-w-[902px] pt-[23px] xl:pt-[55px] flex flex-col md:flex-row md:justify-between md:items-center'>
            <h1 className='text-[60px] leading-[60px] md:text-[105px] md:leading-[105px] lg:text-[120px] lg:leading-[133px] font-bold -tracking-[.005em]'>АгроСфера</h1>
            <p className='h-min text-[18px] leading-[22px] font-medium pt-[22px] md:pt-[20px] xl:pt-[0px] tracking-[.007em]'>Ваш надежный поставщик <br></br>Укрывных материалов</p>
          </section>
        </ContentZone>
        <MainPriceList />
        <ContentZone>
          <MainAchievements />
          <MainProducts />
          <MainAbout />
          <MainAdvantages />
          <MainFeature className='mt-[60px] lg:mt-[160px] h-[650px]'>Предложение для оптовиков и перекупов </MainFeature>
          <MainOrder />
          <MainFeature className='mt-[62px] lg:mt-[163px] h-[502px]'>Контакты</MainFeature>
          <MainReviews />
        </ContentZone>
      </main>
      <Footer />
    </>
  );
};
export default MainPage;
