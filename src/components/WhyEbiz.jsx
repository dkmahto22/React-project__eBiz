import { FileLock2, Truck, BadgePercent, Calculator, Blend, UserRoundCheck, HandCoins, Handshake, FileUser } from 'lucide-react';


const services = [
  {
    name: "Customer’s Privacy",
    icon: <FileLock2 size={70} className="mx-auto mb-3" />,
  },
  
  {
    name: "e-XPRESS Services",
    icon: <Truck size={70} className="mx-auto mb-3" />,
  },
  
  {
    name: "Lowest Fees",
    icon: <BadgePercent size={70} className="mx-auto mb-3" />,
  }, 
  
  {
    name: "Easy EMIs",
    icon: <Calculator size={70} className="mx-auto mb-3" />,
  }, 
  
  {
    name: "Transparent Pricing",
    icon: <Blend size={70} className="mx-auto mb-3" />,
  },  
  
  {
    name: "Assured Satisfaction",
    icon: <UserRoundCheck size={70} className="mx-auto mb-3" />,
  }, 
  
  {
    name: "Money-Back Guarantee",
    icon: <HandCoins size={70} className="mx-auto mb-3" />,
  }, 
  
  {
    name: "Enduring Business Relations",
    icon: <Handshake size={70} className="mx-auto mb-3" />,
  },
  
  {
    name: "Professional Assisted",
    icon: <FileUser size={70} className="mx-auto mb-3" />,
  }, 
  

  
];

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 text-center text-black hover:shadow-lg transition hover:bg-orange-500 hover:text-white"
        >
          {service.icon}
          <h3 className="font-bold text-1xl"> {service.name} </h3>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
