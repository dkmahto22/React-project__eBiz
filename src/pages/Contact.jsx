
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import PageStrip from "./PageStrip";
import ContactForm from './ContacrForm';
import SocialMedia from '../components/SocialMedia';
import { Link } from 'react-router-dom';


export default function Contact() {
const pheading = [
  {
    iptitle: "",
  },

]



  return (
      <>
      <Helmet>
        <title>Contact Us | Corporate Legal Service Under company Law</title>
        <meta name="description" content="Learn more about our mission and team." />
      </Helmet>
      <Header />
 {pheading.map((pht, index) => (
<div key={index} className='h-100'>
<PageStrip  iptitle={pht.iptitle} />
</div>
  ))}


<div className="about-section max-w-4xl mx-auto py-8 px-4 -mt-80">
  <div className='text-white'>
    <h1 class="text-4xl font-bold mb-3 text-white">Contact Us</h1>
  <h3 className='text-2xl font-bold'>Give us a shout ! ! !</h3>
  <p>Want to be an entrepreneur or stuck with any government registrations ? Book-keeping is giving you a headache ?</p>
  <p>You have landed on a correct page !</p>
  <p>Have a detailed conversation with our Compliance Managers @ <Link to='tel:+919643203209'>+919643203209</Link> or drop in an email at <Link to='mailto:info@ebizfiling.com'>info@ebizfiling.com</Link></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 mt-4">

<div className='shadow-md p-8 bg-white'>
<p>For more details visit us at</p>
<h3 className='text-md font-bold text-blue-900 mt-2'>Adrress</h3>
<p><b>Ebizfiling India Pvt. Ltd.</b> A 1205 - 1206, Empire Business Hub, Next to water Tank, Science City Road, Ahmedabad - 380060</p>
  <hr className='my-4 border-gray-300 '/>
<SocialMedia />

  <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5189229966386!2d72.54587741434462!3d23.04142952140645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e846a84765e51%3A0x33f00a0d37304403!2sebizfiling%2C+GST%2C+Trademark+Registration%2C+Bookkeeping%2C+Accounting+Company+Ahmedabad%2C+Gujarat%2C+India!5e0!3m2!1sen!2sin!4v1523954126773"  allowFullScreen="" data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5189229966386!2d72.54587741434462!3d23.04142952140645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e846a84765e51%3A0x33f00a0d37304403!2sebizfiling%2C+GST%2C+Trademark+Registration%2C+Bookkeeping%2C+Accounting+Company+Ahmedabad%2C+Gujarat%2C+India!5e0!3m2!1sen!2sin!4v1523954126773" data-ll-status="loaded" className='entered lazyloaded w-full h-100'></iframe>

</div>
<div className='bg-blue-900 text-center p-6'>
<h3 className='text-md font-bold text-white'>Hello, Nice to Meet You… Leave your message and we will contact you…</h3>

<ContactForm />
</div>





</div>
</div>
      
      
      
      <Footer />
      </>
  )
}


