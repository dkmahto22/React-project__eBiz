import BlogCard from './BlogCard';
import SocialMedia from './SocialMedia';




const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 px-4">

<div className="flex flex-col md:flex-row">

  <div className="w-full md:w-3/5 order-1">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Affiliate With Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Career</a></li>
            <li><a href="#" className="hover:text-orange-400">Blog</a></li>
            <li><a href="#" className="hover:text-orange-400">Read Client Reviews</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-4">Policy</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-400">Disclaimer Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Security Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Cancellation Refund Policy</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-4">Related Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Trademark Registration</a></li>
            <li><a href="#" className="hover:text-orange-400">Payroll</a></li>
            <li><a href="#" className="hover:text-orange-400">Company Annual Filing</a></li>
            <li><a href="#" className="hover:text-orange-400">GST Registration</a></li>
            <li><a href="#" className="hover:text-orange-400">TDS Returns</a></li>
          </ul>
        </div>
        </div>
    
       
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Column 1 */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
          <div className="rounded-lg shadow-md max-w-xl ">
      <p className="mb-4">Get the latest updates via email.</p>
      <div className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-white px-4 py-2  text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2  hover:bg-orange-600 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
        </div>

        {/* Column 2 */}
        <div className='hidden md:block'>
          <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>

   <SocialMedia />
        </div>

        
        </div>

     </div>

  <div className="w-full md:w-2/5 order-2 mt-6 md:mt-0 ">
     <div className='basis-full'>
          <h3 className="text-lg font-semibold mb-4">Latest Blog</h3>
          <div className="text-sm space-y-3">
            <div>
<BlogCard className="mb-8"
  image="src/assets/images/GST-Compliance-Calendar-2025-2026-compressed.jpg"
  title="Annual Compliance Calendar of LLP 2025-26"
  subtitle="Updated: May 2025"
  description="Annual Compliance Calendar of LLP 2025-26: Form 8, Form 11, ITR and DIR 3 Introduction As the new financial year"
  link="/blog/company-registration"
/>
<BlogCard
  image="src/assets/images/Role-of-IEC-in-International-Trade-its-future-trends-2048x1072.jpg"
  title="Role of IEC in International Trade: Future Trends"
  subtitle="Updated: May 2025"
  description="The Role of Import Export Code (IEC) in International Trade and Future Trends Introduction In the dynamic world of"
  link="/blog/company-registration"
/>
<BlogCard
  image="src/assets/images/Benefits-of-a-FSSAI-License-compressed-2-2048x1072.jpg"
  title="LLC vs INC : Difference between LLC and INC"
  subtitle="Updated: May 2025"
  description="LLC vs INC : Difference between LLC and INC Introduction Choosing the right business structure is important when"
  link="/blog/company-registration"
/>

            </div>
        
          </div>
        </div>
     </div>



</div>
<div className='block md:hidden mx-auto text-center'>
          <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>

<SocialMedia />
        </div>




      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6 px-6">
    <p> By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, Refund Policy and Content Policies.</p>  
© 2018-@ebizfiling india Private Limited All rights reserved. Last updated on 1st May, 2025
      </div>
    </footer>
  );
};

export default Footer;
