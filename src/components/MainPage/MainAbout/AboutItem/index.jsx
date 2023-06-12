
const AboutItem = ({ title, subtitle }, key) => {

  return (
    <li className='w-full lg:flex lg:justify-center lg:w-[30%] pt-[30px] lg:px-[15px] lg:py-[5px] py-[29px] lg:pb-[10px] bg-[#ffffff]' key={key}>
      <div className='w-full lg:max-w-[223px] flex flex-col gap-[6px] lg:gap-[22px]'>
        <h4 className='text-[18px] leading-[21px] font-bold'>{title}</h4>
        <p className='text-[14px] leading-[17px] font-normal text-[#5D5E61]'>{subtitle}</p>
      </div>
    </li>
  );
};

export default AboutItem;
