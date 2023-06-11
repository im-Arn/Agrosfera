import { letter, phone } from '../../../../assets/images/Header';
import TopItem from '../TopItem';
import Image from 'next/image';

const HeaderContact = () => {
  return (
    <article>
      <ul className='w-[250px] md:w-[322px] flex gap-5 md:gap-[43px]'>
        <TopItem link='mailto:order@agrosfera'>
          <Image
            className='w-[15px] md:w-[22px] mr-[5px] md:mr-[10px]'
            src={letter}
            alt='иконка конверта'
          />
          order@agrosfera
        </TopItem>
        <TopItem link='tel:+73433644347'>
          <Image
            className='w-[13px] md:w-[19px] mr-[10px]'
            src={phone}
            alt='иконка телефона'
          />
          8 (343) 364-43-47
        </TopItem>
      </ul>
    </article>
  );
};

export default HeaderContact;
