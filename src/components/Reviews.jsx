
import { CircleUserRound} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation } from 'swiper/modules';


const review = [
  {
    name: "Saurabh Shukla",
    icon: <CircleUserRound size={40} className="mx-auto mt-2" />,
    rating: 5,
    comment: "I had a wonderful experience with Ebizfilling India for my company's annual filing and formation services. From the very beginning, the team was professional, responsive, and thorough in guiding me through the process.",
  },
  {
    name: "Brajendra Singh",
  icon: <CircleUserRound size={40} className="mx-auto mt-2" />,
    rating: 4,
    comment: "Excellent service from Ebizfiling! We truly appreciate their prompt assistance in successfully submitting our strike-off application. The team was professional, efficient, and made the filing process seamless Highly recommended!",
  },
  {
    name: "Radhika Chaudhary",
  icon: <CircleUserRound size={40} className="mx-auto mt-2" />,
    rating: 4,
    comment: "Amazing services, very professional and knowledgeable people. I used their services for LLP name approval and incorporation. I didn’t have to do much almost everything was provided by them. Highly recommended, if I could give 6 star review I would.",
  },
  {
    name: "Spirochem Lifesciences Pvt Ltd",
  icon: <CircleUserRound size={40} className="mx-auto mt-2" />,
    rating: 3,
    comment: "Amazing services, very professional and knowledgeable people. I used their services for LLP name approval and incorporation. I didn’t have to do much almost everything was provided by them. Highly recommended, if I could give 6 star review I would.",
  },
  {
    name: "Daksha Kumar",
  icon: <CircleUserRound size={40} className="mx-auto mt-2" />,
    rating: 5,
    comment: "Amazing services, very professional and knowledgeable people. I used their services for LLP name approval and incorporation. I didn’t have to do much almost everything was provided by them. Highly recommended, if I could give 6 star review I would.",
  },




];

const Reviews = () => {
  return (
    <div className="py-8">
      <p className='text-right'> <a href="#" className=" py-2 hover:text-blue-700">View More...</a></p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {review.map((reviewitem, index) => (
          <SwiperSlide key={index}>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 py-4">

    <div
      key={index}
      className="bg-white rounded-2xl shadow-md p-6 text-black hover:shadow-lg transition hover:bg-blue-50"
    >
      {/* Profile Image */}
      <div className="flex items-center gap-4 mb-4">
<div className="w-14 h-14 object-cover">
  {reviewitem.icon}
</div>
        <div>
          <h3 className="font-semibold text-lg text-blue-900">{reviewitem.name}</h3>
          <div className="flex text-yellow-400 text-sm">
            {'★'.repeat(reviewitem.rating)}{'☆'.repeat(5 - reviewitem.rating)}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {reviewitem.comment}
      </p>
    </div>

</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;

