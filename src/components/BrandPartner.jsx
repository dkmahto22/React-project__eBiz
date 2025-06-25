

const bpartner = [
  {
    image:"src/assets/images/PAYTM_1_1.png",
  },
  
  {
    image:"src/assets/images/GLOBALLINKER_1_1.png",
  },
  
  {
    image:"src/assets/images/Verisign_1.png",
  },
  
  {
    image:"src/assets/images/Quickbooks-Logo-2.png",
  },
  
  {
    image:"src/assets/images/Zoho-One-Logo.png",
  },
  
  {
    image:"src/assets/images/Payoneer-1.png",
  },
  
  {
    image:"src/assets/images/Razorpay-1.png",
  },
 
  
];

const BrandPartner = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-3">
      {bpartner.map((bpartnerlist, index) => (
        <div
          key={index}
          className="bg-white"
        >
          <img
                src={bpartnerlist.image}
                alt={bpartnerlist.title}
                className="mx-auto"
              />
     
        
       
        </div>
      ))}
    </div>
  );
};

export default BrandPartner;
