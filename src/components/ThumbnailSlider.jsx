import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderSection = () => {
  const sliderServices = [
    {
      title: "Trademark Registration",
      price: "1499",
      link: "#trademark"
    },
    {
      title: "GST Registration",
      price: "999",
      link: "#gst"
    },
    {
      title: "FSSAI License",
      price: "1299",
      link: "#fssai"
    },
    {
      title: "MSME Registration",
      price: "499",
      link: "#msme"
    },
    {
      title: "Import Export Code",
      price: "1999",
      link: "#iec"
    },
    {
      title: "Shop Act License",
      price: "999",
      link: "#shopact"
    }
  ];

  return (
       <div className="content-area1 max-w-7xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {sliderServices.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              title={service.title}
              price={service.price}
              link={service.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
