import Header from "../Header/";
import Footer from "../Footer";
import Image from "next/image";
import { BigGreen } from "../../assets/images/MainPage";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1300px] mx-auto">
        <section className="max-w-[902px] px-[25px] xl:px-[0px] flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-[60px] leading-[60px] md:text-[120px] md:leading-[133px] font-bold -tracking-[.005em]">АгроСфера</h1>
          <p className="h-min text-[18px] leading-[22px] font-medium pt-[22px] md:pt-[20px] tracking-[.007em]">Ваш надежный поставщик <br></br>Укрывных материалов</p>
        </section>
        <section className="max-w-[1300px] h-[779px] md:h-[700px] flex justify-center relative bg-teal-300 bg-cover px-[25px] xl:px-[0px] mt-[35px]">
          <div className="w-[340px] h-[622px] sm:w-[450px] sm:h-[639px] rounded-xl bg-[#FFFFFF] absolute top-[126px] md:top-[30px] md:right-40">
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default MainPage;
