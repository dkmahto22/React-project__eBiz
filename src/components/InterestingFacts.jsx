import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation } from 'swiper/modules';

const slides = [
  {
    title: "Company Registration",
    image: "src/assets/images/cropped-strike-off-vs-dissolution.jpg",
  },
  {
    title: "GST Filing",
    image: "src/assets/images/cropped-Cover-compressed.jpg",
  },
  {
    title: "Trademark Registration",
    image: "src/assets/images/cropped-money-saving.jpg",
  },
  {
    title: "FSSAI License",
    image: "src/assets/images/cropped-goods.jpg",
  },
  {
    title: "Income Tax Return",
    image: "src/assets/images/cropped-form-fillup.jpg",
  },
  {
    title: "Income Tax Return",
    image: "src/assets/images/cropped-mobile-UI.jpg",
  },
  {
    title: "Income Tax Return",
    image: "src/assets/images/cropped-verces.jpg",
  },



];

const InterestingFacts = () => {
  return (
    <div className="py-8">
      <p className='text-right'> <a href="#" className=" py-2 hover:text-blue-700">View More...</a></p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden shadow-md group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm text-center py-2 px-2">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InterestingFacts;
