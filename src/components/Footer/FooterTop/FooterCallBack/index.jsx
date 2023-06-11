'use client';
import Button from '../../../ui/Button';
import FooterMarket from './FooterMarket';
import FooterTitle from '../FooterTitle';
import React, { useState } from 'react';

const FooterCallBack = () => {
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState('');

  // const formatPhoneNumber = (value) => {
  // ерунда нерабочая
  //   const formattedValue = value      
  //   .replace(/(\d{1})(?=\d)/, '$1 ')
  //   .replace(/(\d{1})(\d{3})(?=\d)/g, '$1 $2 ');

  //   return formattedValue;

  // };

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
    <article className='flex flex-col gap-[29px] text-[#C4C4C4]'>
      <div className='flex md:hidden'>
        <FooterMarket />
      </div>
      <article className='w-[230px] md:w-[317px] h-[136px] md:h-[156px] flex flex-col gap-12 md:gap-[60px]'>
        <FooterTitle>Закажите обратный звонок</FooterTitle>
        <form className='flex flex-col gap-[18px] mb-[10px]' onSubmit={handleSubmit}>
          <input
            type='tel'
            placeholder='+7(777)7777777'
            value={phone}
            maxLength='12'
            onChange={handleChange}
            className={`font-normal text-[14px] leading-[14px] w-[230px] md:w-[317px] h-[20px] border-b-[1px] bg-transparent
           ${error ? 'border-[#DD4433] text-[#DD4433] focus:border-[#DD4433]' : 'border-[#C4C4C4]'}  
           placeholder:text-[#C4C4C4] placeholder:text-[14px] placeholder:leading-[14px]
           focus:outline-none focus:border-white
           `}
          />
          <Button
            disabled={true}
            type='submit'
            variant='green'
            className='w-[230px] md:w-[317px] xl:w-[317px] h-[35px] md:h-[45px]
        text-white text-[14px] leading-[14px]'
          >
            Свяжитесь со мной
          </Button>
        </form>
      </article>
    </article>
  );
};

export default FooterCallBack;
