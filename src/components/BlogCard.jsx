const BlogCard = ({ image, title, subtitle, description, link }) => {
  return (
    <a
      href={link}
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group mb-3"
    >
      {/* Image */}
      <div className="md:w-1/3 w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="p-6 flex flex-col justify-center md:w-2/3">
        <h3 className="text-md font-bold text-blue-900 group-hover:text-orange-600 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        <p className="text-gray-700 mt-3">{description}</p>
      </div>
    </a>
  );
};

export default BlogCard;
