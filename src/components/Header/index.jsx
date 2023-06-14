import HeaderTop from './HeaderTop';
import HeaderBot from './HeaderBot';
import { ContentZone } from '@/components/ui';

const Header = () => {

  return (
    <header className='w-full'>
      <HeaderTop />
      <ContentZone>
        <HeaderBot />
      </ContentZone>
    </header>
  );
};

export default Header;
