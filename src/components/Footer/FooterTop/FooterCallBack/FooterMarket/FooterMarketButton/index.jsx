import Image from "next/image";
import Link from "next/link";

const FooterMarketButton = ({ name, img, href, key }) => {
  return (
    <li key={key} className="w-[100px] h-[30px] flex">
      <Link href={href}>
        <button
          className="h-[30px] w-[100px] bg-transparent"
        >
          <Image
            className="w-[100px] h-[30px] cursor-pointer"
            src={img}
            alt={`иконка ${name}`}
          />
        </button>
      </Link >
    </li>
  );
}

export default FooterMarketButton;