import ThumbnailSlider from './ThumbnailSlider';
import ServiceGrid from './WhyEbiz';
import InterestingFacts from './InterestingFacts';
import BlogSection from './BlogSection';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import Clients from './Clients';
import BrandPartner from './BrandPartner';
import SectionTitle from './SectionTitle';



const heading = [
  {
    headingtxt: "Popular Services",
    compname: <ThumbnailSlider />,
  },
  {
    headingtxt: "Why EbizFiling",
    compname:  <ServiceGrid />,
  },
  {
    headingtxt: "Interesting Facts",
    compname:   <InterestingFacts />,
  },
  {
    headingtxt: "You should know",
    compname:   <BlogSection />,
  },
  {
    headingtxt: "Ebizfiling in Numbers",
    compname:<Portfolio />,
  },
  {
    headingtxt: "Client Reviews",
    compname:<Reviews />,
  },
  {
    headingtxt: "Clients",
    compname:<Clients />,
  },
  {
    headingtxt: "Associated With",
    compname:<BrandPartner  />,
  },

  
 
  

  
];


const ContentSection = () => {
  return (
<div className="main-content-area">

<div  style={{ background: `url('src/assets/images/who-we-are-bg.jpg') center -77px`, backgroundSize: 'cover'}} className="shadow-md py-4">
<div className="content-area1 max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 px-4">
<div>
<img src="src/assets/images/hi-are-ebizfiling-1-768x262.png" className='h-40' />
<h2 className="text-2xl font-bold mb-3">An Arena of Business Solutions</h2>
<p>EbizFiling.com is a motivated and progressive concept conceived by like–minded people, which helps small, medium and large businesses to fulfill all compliance requirements of Indian Laws. It is a platform managed, operated, and driven by professional assistance.</p>
</div>

<div>


</div>



</div>
</div>





{/* 

<div className="content-area1 max-w-7xl mx-auto py-8 px-4">

<div className="heading-section text-center mb-5 text-blue-900">  
<h2 className="text-4xl font-bold">Private Limited Company Registration</h2>
<hr className="my-4 max-w-sm mx-auto" />
<p className="text-2xl font-bold">All you need to know</p>
</div>  

<p>A Private Limited Company offers limited liability and legal protection to its shareholders. A Private Limited Company in India lies somewhere between a partnership firm and a widely owned public company. It can be registered with a minimum of two people. A person can be both a director and shareholder in a Private Limited Company.</p>
<p>The liability of the members of a <a href="#" target="_blank" rel="noopener noreferrer">Private Limited Company</a> (PLC) is limited to the number of shares held by them. A Private Limited Company in India can begin with operations after getting the Certificate of Incorporation. A PLC can be incorporated within 15 working days.</p>

 </div>
*/}

{heading.map((allheading, index) => (
<div key={index}  className="content-area2 max-w-7xl mx-auto py-8 px-4">
<SectionTitle  headingtxt={allheading.headingtxt} />
{allheading.compname}
</div>
 ))}






   
    </div>
  );
}

export default ContentSection;