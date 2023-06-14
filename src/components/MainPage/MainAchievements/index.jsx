import { Title2 } from '@/components/ui';
import AchievementItem from './AchievementItem';

const MainAchievements = () => {

  const achievements = [
    {
      name: '7,5',
      sub1: 'МЛН. ТОНН',
      sub2: 'Объем запасов угля '
    },
    {
      name: '17,5',
      sub1: 'ГВт',
      sub2: 'Установленная электрическая мощность'
    },
    {
      name: '50',
      sub1: 'МЛН. ТОНН',
      sub2: 'Перевалочные мощности'
    },
    {
      name: '101,2',
      sub1: 'МЛН. ТОНН',
      sub2: 'Угля произведено в 2020 году'
    },
    {
      name: '26300',
      sub1: 'МЛН. ТОНН',
      sub2: 'Гкал / ч. Установленная тепловая Мощность'
    },
    {
      name: '110',
      sub1: 'МЛН. ТОНН',
      sub2: 'Транспортировка вагонами под управлением'
    },
  ];

  return (
    <section className='max-w-[1300px] mt-[57px] lg:mt-[172px]'>
      <Title2>О нас в цифрах</Title2>
      <ul className='flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] gap-x-[1px] md:mt-[30px] bg-[#C4C4C4]'>
        {achievements.map(({ name, sub1, sub2 }, index) =>
          (<AchievementItem name={name} sub1={sub1} sub2={sub2} key={index} />))}
      </ul>
    </section>
  );
};

export default MainAchievements;
