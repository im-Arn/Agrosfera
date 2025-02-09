import { ContentZone } from '@/components/ui';

const FooterBot = () => {
  return (
    <section className="h-fit lg:h-[111px] bg-[#141414]">
      <ContentZone>
        <article className="max-w-[1300px] mx-auto py-[30px]">
          <p className="text-left text-[14px] leading-[17px] font-normal text-[#C4C4C4]">
            Обращаем Ваше внимание, что приведенные цены и характеристики товаров носят исключительно информационный характер и
            ни при каких условиях не являются публичной офертой, определяемой положениями ст. 437 (п.2) Гражданского кодекса РФ.
            Получить подробную информацию о характеристиках товаров, их наличии и стоимости Вы всегда можете у менеджера нашей
            компании по телефону <a href="tel:+73432664749">+7 (343) 266 47 49</ a>
          </p>
        </article>
      </ContentZone>
    </section>
  );
};

export default FooterBot;
