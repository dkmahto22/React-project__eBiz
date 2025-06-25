import { HandPlatter, HandCoins, MapPinHouse, Repeat, MapPinPlus, FolderKanban, Handshake, CreditCard } from 'lucide-react';


const services = [
  {
    name: "Services Offered",
    number: "300+",
    icon: <HandPlatter size={70} className="mx-auto mb-3" />,
  },

  {
    name: "Businesses Served",
    number: "40000+",
    icon: <Handshake size={70} className="mx-auto mb-3" />,
  },
  
  {
    name: "Indian Cities",
    number: "1000+",
    icon: <MapPinHouse size={70} className="mx-auto mb-3" />,
  },

  {
    name: "Repeated Clients",
    number: "63%",
    icon: <Repeat size={70} className="mx-auto mb-3" />,
  },

  {
    name: "Countries Served",
    number: "10+",
    icon: <MapPinPlus size={70} className="mx-auto mb-3" />,
  },

  {
    name: "In House Operations",
    number: "100%",
    icon: <FolderKanban size={70} className="mx-auto mb-3" />,
  },

  {
    name: "Payment Options",
    number: "50+",
    icon: <CreditCard size={70} className="mx-auto mb-3" />,
  },

  {
    name: "Saving fees",
    number: "67%",
    icon: <HandCoins size={70} className="mx-auto mb-3" />,
  },
  
 
  

  
];

const Portfolio = () => {
  return (
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
  {services.map((service, index) => (
    <div
      key={index}
      className="group bg-white rounded-lg shadow-sm p-4 text-center text-black hover:shadow-lg transition hover:bg-orange-500 hover:text-white">

        <div className=' text-blue-900 group-hover:text-white transition-colors duration-300'>
      {service.icon}
</div>
      <h3 className="font-bold text-3xl my-2 text-orange-500 group-hover:text-white transition-colors duration-300">
        {service.number}
      </h3>

      <h3 className="text-1xl text-blue-900 group-hover:text-white transition-colors duration-300">
        {service.name}
      </h3>
    </div>
  ))}
</div>

  );
};

export default Portfolio;
