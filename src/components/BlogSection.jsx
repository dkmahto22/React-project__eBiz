

const blogitem = [
  {
    title: "Compliance Calendar for the Month of May 2025",
    image:"src/assets/images/Compliance-Calendar-for-May-2025-284x160.jpg",
    blogtext: "Compliance Calendar for the Month of May 2025 With the start of May 2025, Stay ahead of deadlines with the compliance calendar for the month of May 2025. This month has important due dates for GST returns, Income ",
    link: "#link1"
},
  
  {
    title: "Compliance Calendar for the Month of May 2025",
    image:"src/assets/images/Compliance-Calendar-for-May-2025-284x160.jpg",
    blogtext: "Compliance Calendar for the Month of May 2025 With the start of May 2025, Stay ahead of deadlines with the compliance calendar for the month of May 2025. This month has important due dates for GST returns, Income ",
    link: "#link1"
},
  
  {
    title: "Compliance Calendar for the Month of May 2025",
    image:"src/assets/images/Compliance-Calendar-for-May-2025-284x160.jpg",
    blogtext: "Compliance Calendar for the Month of May 2025 With the start of May 2025, Stay ahead of deadlines with the compliance calendar for the month of May 2025. This month has important due dates for GST returns, Income ",
    link: "#link1"
},
  
  
];

const BlogSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {blogitem.map((bcontent, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 text-black hover:shadow-lg transition hover:bg-blue-500/5"
        >
          <img
                src={bcontent.image}
                alt={bcontent.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
          <h3 className="font-bold text-md md:text-2xl my-3 text-orange-500"> {bcontent.title} </h3>
          <p>{bcontent.blogtext} </p>
          <p className='pt-4'><a href="{link}" className="text-red-900 hover:text-blue-700">Read More</a></p>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
