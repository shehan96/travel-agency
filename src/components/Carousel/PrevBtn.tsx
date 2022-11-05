import { useSwiper } from 'swiper/react';

type PrevBtnProps = {
  slot: string;
};

const PrevBtn = ({ slot }: PrevBtnProps) => {
  const swiper = useSwiper();

  return (
    <>
      <button slot={slot} onClick={() => swiper.slidePrev()}>
        Prev Slide
      </button>
    </>
  );
};

export { PrevBtn };
