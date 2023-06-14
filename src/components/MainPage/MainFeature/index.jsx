const MainFeature = ({ children, className }) => {
  return (
      <section className={`w-full bg-[#F9F9F9] flex flex-col justify-center items-center border-[2px] border-[##898989] rounded-xl ${className}`}>
        <p className='text-[36px] leading-[43px] text-bold text-[#C8C8C8]'>{children}</p>
      </section>
  );
};

export default MainFeature;
