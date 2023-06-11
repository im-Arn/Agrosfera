const FooterInfo = () => {
  return (
    <ul className="w-full max-w-[556px] flex flex-col md:flex-row gap-[17px] md:gap-[99px] 
    text-left font-medium md:font-normal text-[14px] leading-[17px] text-[#C4C4C4]">
      <li className="max-w-[349px] md:max-w-[228px] flex flex-col gap-[17px] md:gap-[10px]">
        <p>ООО Агросфера </p>
        <p>
          Юр. адрес:<br></br>
          620033, Свердловская область, город Екатеринбург, ул. Искровцев, стр. 38а, офис 207
        </p>
      </li>
      <li className="max-w-[228px] flex flex-col gap-[17px] md:gap-[10px]">
        <p>ОГРН<br></br>1186658007425</p>
        <p>ИНН/КПП<br></br>6679113982<br></br>667001001</p>
      </li>
    </ul >
  );
};

export default FooterInfo;