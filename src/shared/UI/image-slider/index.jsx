import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';

export const ImageSlider = ({ sliderRef, images }) => {
  return (
    <Swiper
      ref={sliderRef}
      className='image-slider'
      modules={[Pagination]}
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 2
      }}
      slidesPerView="auto"
      slidesPerGroup={3}
      allowTouchMove={false}
      spaceBetween={16}
    >
      {images.map(img =>
        <SwiperSlide
          key={img.id}
          className='image-slider__slide'
        >
          <img
            className='image-slider__img'
            src={img.src}
            alt={img.alt}
          />
        </SwiperSlide>
      )}
    </Swiper>
  )
}
