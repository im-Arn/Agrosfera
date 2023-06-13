const MainFeature = ({ children }) => {
  return (
    <section className='mt-[60px] w-full h-[650px] bg-[#F9F9F9] flex flex-col justify-center items-center border-[2px] border-[##898989] rounded-xl'>
      <p className='text-[36px] leading-[43px] text-bold text-[#C8C8C8]'>{children}</p>
    </section>
  );
};

export default MainFeature;
