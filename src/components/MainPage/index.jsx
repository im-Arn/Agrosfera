import Header from "../Header/";
import Footer from "../Footer";
import MainPriceList from "./MainPriceList";
import MainAchievements from "./MainAchievements";

// import Image from "next/image";
// import { BigGreen } from "../../assets/images/MainPage";
// import { Title2, Button } from "../ui";

const MainPage = () => {

  return (
    <>
      <Header />
      <main className="max-w-[1300px] mx-auto">
        <section className="max-w-[902px] px-[25px] xl:px-[0px] flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-[60px] leading-[60px] md:text-[105px] md:leading-[105px] lg:text-[120px] lg:leading-[133px] font-bold -tracking-[.005em]">АгроСфера</h1>
          <p className="h-min text-[18px] leading-[22px] font-medium pt-[22px] md:pt-[20px] tracking-[.007em]">Ваш надежный поставщик <br></br>Укрывных материалов</p>
        </section>
        <MainPriceList />
        <MainAchievements />
      </main>
      <Footer />
    </>
  );
};
export default MainPage;
