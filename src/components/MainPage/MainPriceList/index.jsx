'use client';
import { Button, Title2 } from '@/components/ui';
import React, { useState } from 'react';
import { ContentZone } from '@/components/ui';

const MainPriceList = () => {

  const [formValues, setFormValues] = useState({
    person: '',
    mail: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    mail: false,
    phone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let error = false;

    // правила валидации для каждого поля
    if (fieldName === 'person') {
      if (value.trim() === '') {
        error = true;
      } else {
        error = false;
      }
    } else if (fieldName === 'mail') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = true;
      } else {
        error = false;
      }
    } else if (fieldName === 'phone') {
      if (!/^\+?\d+$/.test(value)) {
        error = true;
      } else {
        error = false;
      }
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };

  const isFormValid = () => {
    return Object.values(formErrors).every((error) => error === false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      // const postData = formValues; //инпуты
      setFormValues((prevValues) => ({
        ...prevValues,
        person: '',
        mail: '',
        phone: '',
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        person: true,
        mail: true,
        phone: true,
      }));
    }


  };

  return (
    <section className={`max-w-[1300px] mx-auto h-[779px] md:h-[700px] md:rounded-md flex justify-center relative 
    bg-cover mt-[35px] bg-[url('../assets/images/MainPage/bigGreen.png')] bg-center`}>
      <ContentZone>
        <div className='w-[87.3%] max-w-[340px] md:max-w-[450px] sm:w-[450px] sm:h-[639px] rounded-xl bg-[#FFFFFF] 
  absolute top-[126px] md:top-[30px] md:right-[40px] px-[15px] pt-[28px] pb-[30px] md:px-[39px]'>
          <Title2>Получить прайс-лист</Title2>
          <form className='mt-[31px] flex flex-col items-center gap-[15px]' onSubmit={handleSubmit}>
            <label className='w-full flex flex-col gap-[10px] text-[16px] leading-[16px] font-medium' htmlFor='person'><p>Название компании</p>
              <input
                type='text'
                id='person'
                name='person'
                placeholder='ИЛИ ВАШЕ ИМЯ'
                value={formValues.person}
                maxLength='12'
                onChange={handleChange}
                className={`w-full max-w-[310px] md:max-w-full h-[50px] px-[25px] rounded-md border-[1px] bg-transparent 
            font-normal text-[14px] leading-[14px] focus:outline-none focus:border-black
           ${formErrors.person ? 'border-[#DD4433] text-[#DD4433] focus:border-[#DD4433]' : 'border-[#C4C4C4]'}  
           placeholder:text-[#898989] placeholder:text-[14px] placeholder:leading-[14px]
           `}
              />
            </label>
            <label className='w-full flex flex-col gap-[10px] text-[16px] leading-[16px] font-medium' htmlFor='mail'><p>Ваш email</p>
              <input
                type='email'
                id='mail'
                name='mail'
                placeholder='email@mail.ru'
                value={formValues.mail}
                maxLength='50'
                onChange={handleChange}
                className={`w-full max-w-[310px] md:max-w-full h-[50px] px-[25px] rounded-md border-[1px] bg-transparent 
            font-normal text-[14px] leading-[14px] focus:outline-none focus:border-black
           ${formErrors.mail ? 'border-[#DD4433] text-[#DD4433] focus:border-[#DD4433]' : 'border-[#C4C4C4]'}  
           placeholder:text-[#898989] placeholder:text-[14px] placeholder:leading-[14px]
           `}
              />
            </label>
            <label className='w-full flex flex-col gap-[10px] text-[16px] leading-[16px] font-medium' htmlFor='phone'><p>Ваш телефон</p>
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='+7 (492)'
                value={formValues.phone}
                maxLength='12'
                minLength='10'
                onChange={handleChange}
                className={`w-full max-w-[310px] md:max-w-full h-[50px] px-[25px] rounded-md border-[1px] bg-transparent 
            font-normal text-[14px] leading-[14px] focus:outline-none focus:border-black
           ${formErrors.phone ? 'border-[#DD4433] text-[#DD4433] focus:border-[#DD4433]' : 'border-[#C4C4C4]'}  
           placeholder:text-[#898989] placeholder:text-[14px] placeholder:leading-[14px]
           `}
              />
            </label>
            <label className='w-full flex flex-col gap-[10px] text-[16px] leading-[16px] font-medium' htmlFor='message'><p>Комментарий</p>
              <textarea
                id='message'
                name='message'
                placeholder=''
                value={formValues.message}
                onChange={handleChange}
                className={`w-full max-w-[310px] md:max-w-full h-[123px] resize-none px-[25px] py-[20px] rounded-md border-[1px] bg-transparent 
            font-normal text-[14px] leading-[14px] focus:outline-none focus:border-black  
           placeholder:text-[#898989] placeholder:text-[14px] placeholder:leading-[14px]
           `}
              />
            </label>
            <Button
              type='submit'
              variant='green'
              className='w-full max-w-[280px] h-[46px] mt-[15px] text-white text-[13px] leading-[13px]'
            >
              Получить прайс
            </Button>
          </form>
        </div>
      </ContentZone>
    </section>
  );
};

export default MainPriceList;
