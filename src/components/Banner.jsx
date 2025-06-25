


const Banner = () => {
  return (
    <>


<div className='banner py-6 shadow-md bg-blue-50'>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto py-6 px-4"> 

    <div className="my-6">
     <h1 className="text-4xl md:text-7xl mb-2 text-orange-500"><b>Register</b></h1>
    <p><b className="text-2xl">Private Limited Company</b></p> 
   <p className="my-4"><hr /></p>
      <p>Simplest and a very popular form of Company Registration in India. Prices Starting from INR 7399/- only.</p>
      
      </div>


    <div className="">
<div className="max-w-sm mx-auto bg-white shadow-md rounded-lg mt-10">
  <div className="bg-blue-900 mb-4 p-4 text-white">
      <h2 className="text-3xl text-700 font-bold text-center">Start With Confidence</h2>
      <p className="text-center">CA/CS Assisted | 4.8/5 Rating</p>
</div>
      <form className="space-y-4 p-4">
        {/* Name Field */}
        <div>
          
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div>
        
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        {/* Message Field */}
        <div>
         
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
           Get Started
          </button>
        </div>
      </form>
    </div>



    </div>

 </div>



</div>




    </>
  );
}

export default Banner;
