import FooterMarketButton from "./FooterMarketButton";
import { OZ, WB, YA } from "../../../../../assets/images/Footer";
import FooterTitle from "../../FooterTitle";

const FooterMarket = () => {
  const markets = [
    {
      name: "Яндекс Маркет",
      img: YA,
      href: "/"
    },
    {
      name: "Wildberries",
      img: WB,
      href: "/"
    },
    {
      name: "OZON",
      img: OZ,
      href: "/"
    },
  ]

  return (
    <article className="w-[311px]">
      <FooterTitle>Мы на маркетплейсах:</FooterTitle>
      <ul className="flex gap-1 mt-[10px]">
        {markets.map(({ name, img, href }, index) =>
          (<FooterMarketButton name={name} img={img} href={href} key={index} />))}
      </ul>
    </article>
  );
}

export default FooterMarket;