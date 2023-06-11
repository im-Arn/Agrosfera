

const AchievementItem = ({ name, sub1, sub2, key }) => {

  return (
    <li key={key} className="w-full h-[150px] md:h-[200px] px-[20px] flex flex-col items-center justify-center bg-[#ffffff]">
      <div className="w-[197px] h-[69px] flex flex-col">
        <p className="whitespace-nowrap text-[45px] leading-[45px] font-normal">
          {name}
          <span className="text-[12px] leading-[12px] ml-1">{sub1}</span>
        </p>
        <p className="whitespace-wrap text-[12px] leading-[12px] font-normal text-[#898989]">{sub2}</p>
      </div>
    </li>
  );
};

export default AchievementItem;