import { useSwiper } from 'swiper/react';

type NextBtnProps = {
  slot: string;
};

const NextBtn = ({ slot }: NextBtnProps) => {
  const swiper = useSwiper();
  return (
    <>
      <button slot={slot} onClick={() => swiper.slideNext()}>
        Next Slide
      </button>
    </>
  );
};

export { NextBtn };
