import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const StyledSwiper = styled(Swiper)`
  /* width: 600px; */
  height: 300px;
`;

const CoveredImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function SwiperEx() {
  return (
    <StyledSwiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <CoveredImage src="https://via.placeholder.com/1920x1080" alt="sample" />
      </SwiperSlide>
      <SwiperSlide>
        <CoveredImage src="https://via.placeholder.com/1920x1080" alt="sample" />
      </SwiperSlide>
      <SwiperSlide>
        <CoveredImage src="https://via.placeholder.com/1920x1080" alt="sample" />
      </SwiperSlide>
      <SwiperSlide>
        <CoveredImage src="https://via.placeholder.com/1920x1080" alt="sample" />
      </SwiperSlide>
    </StyledSwiper>
  );
}

export default SwiperEx;