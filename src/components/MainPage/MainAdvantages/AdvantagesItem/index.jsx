
const AdvantagesItem = ({ title, subtitle }, key) => {
  return (
  <li className='w-full flex flex-col gap-[15px]' key={key}>
    <h4 className='text-[18px] leading-[22px] md:text-[24px] md:leading-[29px] text-[#000000] font-bold'>{title}</h4>
    <p className='text-[14px] leading-[18px] text-[#000000] font-normal text-[#2E2E2E]'>{subtitle}</p>
  </li>
  );
};

export default AdvantagesItem;
