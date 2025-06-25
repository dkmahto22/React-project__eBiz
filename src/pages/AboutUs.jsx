
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageStrip from "./PageStrip";
import { Helmet } from "react-helmet-async";
import SectionTitle from '../components/SectionTitle';

export default function AboutUs() {

const pheading = [
  {
    iptitle: "About Us",
    headingtxt: "Our Story",
    headingtxt2: "How far Ebizfiling has reached in just a few years?",
    headingtxt3: "About Bottom Section",
  },

]



  return (
      <>
<Helmet>
  <title>About Us | Corporate Legal Service Under company Law</title>
  <meta name="description" content="Learn more about our mission and team." />
</Helmet>
<Header />
 {pheading.map((pht, index) => (
<div key={index}>
<PageStrip  iptitle={pht.iptitle} />
</div>
  ))}


<div className="about-section max-w-7xl mx-auto py-8 px-4">

<div className='py-8'>
<SectionTitle headingtxt={pheading[0]?.headingtxt} />

<img src="src/assets/images/Ebizfiling-The-Concept-1-768x430.png" className=' mx-auto mb-8' />
<p>Ebizfiling India Private Limited was established in 2016 with the singular goal of creating a technologically advanced platform for business entrepreneurs to access compliance-related services online. Our journey began with a modest team of four and a limited range of services. Through relentless effort and a commitment to excellence, 
  we have expanded our offerings and grown significantly. Our unique approach combines competitive pricing, swift turnaround times, and advanced digital platforms to deliver exceptional service. We pride ourselves on being a comprehensive business solutions provider, committed to making compliance processes seamless and efficient for our clients. Join us at EbizFiling and experience the difference in professional compliance services.</p>

</div>

<div className='py-8'>
<SectionTitle headingtxt={pheading[0]?.headingtxt2} />
<img src="src/assets/images/How-far-Ebizfiling-has-reached-in-just-a-few-years-768x481.png" className=' mx-auto mb-8' />
<p className='py-4'>Started with 4 members, a couple of clients, and a handful of services, with a unique concept Ebizfiling India Private Limited today has made its mark as the leading online platform that provides digital marketing as well as compliance services not only in India but also has started its operations in 10+ countries. Today Ebizfiling is offering 300+ services in 1000+ cities. It is interesting to know that till now Ebizfiling has served more than 40000+ businesses served around the globe.</p>
<p className='py-4'>With Each passing year, Ebizfiling thought from a client’s perspective and tried to introduce new services to facilitate its client base across the world. For this purpose, Ebizfiling has set up a team of experts in the respective fields from time to time. Ebizfiling India Pvt Ltd provides an entire gamut of services including Accounting, Payroll Services, HR Hiring Services, etc. Apart from this, Ebizfiling has also launched a few new services namely, Business Advisory Services, Premium Retainership Services, PEO Services, Logo Designing, and Digital Marketing Services as well. All we want is to assure our clients that whatever their business requires, we will provide them.</p>

</div>


 <SectionTitle headingtxt={pheading[0]?.headingtxt3} />

</div>
<Footer />
      </>
  )
}


