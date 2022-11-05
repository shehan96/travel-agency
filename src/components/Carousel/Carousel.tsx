import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { NextBtn } from './NextBtn';
import { PrevBtn } from './PrevBtn';
import { Card } from '../Card';

const Carousel = () => {
  const items: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <PrevBtn slot='container-start' />
        {items.map((i) => {
          return (
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          );
        })}
        <NextBtn slot='container-end' />
      </Swiper>
    </>
  );
};

export { Carousel };
