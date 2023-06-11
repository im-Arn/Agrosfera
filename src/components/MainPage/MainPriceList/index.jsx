'use client';
import { Title2, Button } from '../../ui';
import React, { useState } from 'react';

const MainPriceList = () => {
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setPhone(inputValue);
    if (!/^\+?\d+$/.test(inputValue)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhone('');
    setError(false);
  };


  return (
    <section className='max-w-[1300px] h-[779px] md:h-[700px] rounded-md flex justify-center relative bg-teal-300 bg-cover px-[25px] xl:px-[0px] mt-[35px]'>
      <div className='w-[340px] h-[622px] sm:w-[450px] sm:h-[639px] rounded-xl bg-[#FFFFFF] 
  absolute top-[126px] md:top-[30px] md:right-40 px-[13px] py-[30px] md:px-[39px]'>
        <Title2>Получить прайс-лист</Title2>
        <form className='mt-[30px] flex flex-col items-center gap-[15px]' onSubmit={handleSubmit}>
          <label className='flex flex-col gap-[10px] text-[16px] leading-[16px] font-medium'><p>Ваш телефон</p>
            <input
              type='tel'
              placeholder='+7 (492)'
              value={phone}
              maxLength='12'
              onChange={handleChange}
              className={` w-[310px] md:w-[360px] h-[50px] px-[25px] rounded-md border-[1px] bg-transparent 
            font-normal text-[14px] leading-[14px] focus:outline-none focus:border-black
           ${error ? 'border-[#DD4433] text-[#DD4433] focus:border-[#DD4433]' : 'border-[#C4C4C4]'}  
           placeholder:text-[#898989] placeholder:text-[14px] placeholder:leading-[14px]
           `}
            />
          </label>
          <Button
            // disabled={true}
            type='submit'
            variant='green'
            className='w-[280px] h-[46px] text-white text-[13px] leading-[13px]'
          >
            Получить прайс
          </Button>
        </form>
      </div>
    </section>
  );
};

export default MainPriceList;