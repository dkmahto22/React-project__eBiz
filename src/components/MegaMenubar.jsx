import React, { useState } from "react";
import { AlignLeft, X, ChevronDown, ShoppingCart } from "lucide-react";
//import megaMenuData from "./megaMenuData";
import ExpandableSearch from "./SearchBox";
import { Link } from "react-router-dom";

const megaMenuData = [
  {
    title: "Be an Entrepreneur",
    sections: [
      {
        heading: "Startup",
        links: [
          { name: "Company Registration API", url: "/userlist" },
          { name: "GST Registration", url: "#" },
          { name: "GST Registration", url: "#" },
        
        ],
    },
    {
        heading: "Services Two",
        links: [
          { name: "Company Registration", url: "#" },
          { name: "GST Registration", url: "#" },
          { name: "GST Registration", url: "#" },
       
        ],
      },
    {
        heading: "Services Three",
        links: [
          { name: "Company Registration", url: "#" },
          { name: "GST Registration", url: "#" },
          { name: "GST Registration", url: "#" },
        
        ],
      },



      {
        heading: "Compliance",
        links: [
          { name: "Annual Filing", url: "#" },
          { name: "TDS Returns", url: "#" },
          { name: "TDS Returns", url: "#" },

        ],
      },
    ],
  },
  {
    title: "Registrations",
    sections: [
      {
        heading: "Learn",
        links: [
          { name: "Blogs", url: "#" },
          { name: "Case Studies", url: "#" },
        ],
      },
    ],
  },
  {
    title: "Returns",
    sections: [
      {
        heading: "Learn",
        links: [
          { name: "Blogs", url: "#" },
          { name: "Case Studies", url: "#" },
        ],
      },
    ],
  },
  {
    title: "Compliances",
    sections: [
      {
        heading: "Learn",
        links: [
          { name: "Blogs", url: "#" },
          { name: "Case Studies", url: "#" },
        ],
      },
    ],
  },
  {
    title: "Trademark & other IPRs",
    sections: [
      {
        heading: "Learn",
        links: [
          { name: "Blogs", url: "#" },
          { name: "Case Studies", url: "#" },
        ],
      },
    ],
  },
  {
    title: "Accounting & Payroll",
    sections: [
      {
        heading: "Learn",
        links: [
          { name: "Blogs", url: "#" },
          { name: "Case Studies", url: "#" },
        ],
      },
    ],
  },
  {
    title: "Loans",
    sections: [
      {
        heading: "Learn",
        links: [
          { name: "Blogs", url: "#" },
          { name: "Case Studies", url: "#" },
        ],
      },
    ],
  },
  {
    title: "Blogs",
    sections: [
      {
        heading: "Learn",
        links: [
          { name: "Blogs", url: "#" },
          { name: "Case Studies", url: "#" },
        ],
      },
    ],
  },
  {
    title: <ExpandableSearch />,
      
  },








  
];

const MegaMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // For mobile dropdown

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="bg-white relative z-50">
      <div className="flex justify-between items-center px-4 ">
          {/* Mobile Hamburger */}
 <div className="flex items-center">
        <div className="md:hidden h-4 w-14">
          <button onClick={() => setMobileOpen(true)}>
            <AlignLeft className="h-6 w-6 text-gray-800 cursor-pointer" />
          </button>
        </div>
       <Link to="/"><img src='src/assets/images/logo-ebizfiling-sm.png' className='h-16 py-2 md:py-0'></img></Link>
</div>
<div className="flex md:hidden gap-4 items-center ">
<ShoppingCart size={40} className="text-orange-500" />
<ExpandableSearch />
</div>
        {/* Desktop Mega Menu */}
        <ul className="hidden md:flex space-x-6 relative items-center">
          {megaMenuData.map((menu, idx) => (
  <li key={idx} className="group ">
    <a href="#" className="text-gray-700 hover:text-orange-500 py-8 cursor-pointer block">
      {menu.title}
    </a>

    {/* Check if sections exist to show dropdown */}
    {menu.sections && menu.sections.length > 0 && (
      <div className="absolute left-0 right-0 top-full hidden group-hover:flex bg-white shadow-lg p-6 z-50 border-t-2 border-orange-500 justify-between">
        {menu.sections.map((section, i) => (
          <div key={i} className="w-1/3 px-3">
            <h4 className="font-bold text-sm text-gray-800 mb-2">
              {section.heading}
            </h4>
            <ul className="space-y-1">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={link.url}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </li>
))}

        </ul>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold text-orange-500">Menu</h2>
          <button onClick={() => setMobileOpen(false)}>
            <X className="h-6 w-6 text-gray-800 cursor-pointer" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-full subnenu">
          {megaMenuData.map((menu, idx) => (
  <div key={idx}>
    <button
      onClick={() => toggleDropdown(idx)}
      className="flex justify-between items-center w-full font-semibold text-gray-800">
      {menu.title}
      {menu.sections && menu.sections.length > 0 && (
        <ChevronDown
          className={`ml-2 transform transition-transform ${
            activeIndex === idx ? "rotate-180" : ""
          }`}
        />
      )}
    </button>

    {menu.sections && activeIndex === idx && (
      <div className="mt-2 ml-3 space-y-3">
        {menu.sections.map((section, i) => (
          <div key={i}>
            <h4 className="text-sm font-medium text-gray-600">
              {section.heading}
            </h4>
            <ul className="ml-2 space-y-1">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.url}
                    className="text-sm text-gray-500 hover:text-blue-600">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </div>
))}

        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default MegaMenu;