

const Client = [
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
  {
    image:"src/assets/images/Wellingtone-Project-Management-Pvt-Ltd.png",
  },
  
 
  
];

const Clients = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 ">
      {Client.map((clogo, index) => (
        <div
          key={index}
          className="bg-white"
        >
          <img
                src={clogo.image}
                alt={clogo.title}
                className=""
              />
     
        
       
        </div>
      ))}
    </div>
  );
};

export default Clients;
