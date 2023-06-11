import FooterLink from './FooterLink';
import FooterTitle from '../../FooterTitle';

const FooterList = ({ links, title, variant }) => {
  if (variant === 'social') {
    return (
      <>
        <article className='hidden text-[#C4C4C4] text-left md:flex flex-col'>
          <FooterTitle>{title}</FooterTitle>
          <ul className='flex flex-col gap-[16px] md:gap-[21px] mt-[15px] md:mt-[24px]'>
            {links.map(({ name, img, href }, index) =>
              (<FooterLink name={name} img={img} href={href} key={index} />))}
          </ul>
        </article>
        <article className='text-[#C4C4C4] text-left flex md:hidden flex-col'>
          <ul className='flex flex-row gap-[5px]'>
            {links.map(({ name, img, href }, index) =>
              (<FooterLink name={name} img={img} href={href} key={index} />))}
          </ul>
        </article>
      </>
    );
  } else {
    return (
      <article className='text-[#C4C4C4] text-left flex flex-col'>
        <FooterTitle>{title}</FooterTitle>
        <ul className='flex flex-col gap-[16px] md:gap-[21px] mt-[15px] md:mt-[24px]'>
          {links.map(({ name, img, href }, index) =>
            (<FooterLink name={name} img={img} href={href} key={index} />))}
        </ul>
      </article>
    );
  }
};
export default FooterList;