
const title = [
  'Условия поставки',
  'Образцы',
  'Договор',
  'Промышленная партия',
  'Заявка и счет',
  'Доставка'
];
const MainOrder = () => {
  return (
    <section className='mt-[54px] lg:mt-[153px] w-full flex flex-col gap-[60px]'>
      <h2 className='text-[44px] leading-[53px] font-bold text-[#000000]'>Этапы заказа</h2>
      <div className='w-full pt-[2px] lg:pt-[5px] pl-[5px] '>
        <ul className='w-full flex flex-col md:flex-row gap-[60px] md:gap-[0px] border-l-[1px] md:border-l-[0px] md:border-t-[1px] border-[#c4c4c4]'>
          {title.map((title, index) => (
            <li className='w-full relative pl-[24px] md:pl-[0px] md:pt-[24px]' key={index}>
              <div className='absolute top-[4px] md:-top-[5px] -left-[5px] md:left-[0px] rounded-xl h-[10px] w-[10px] bg-[#c4c4c4]'></div>
              <p className='md:mr-[10%] text-[14px] leading-[18px] text-bold text-[#898989]'>{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainOrder;
