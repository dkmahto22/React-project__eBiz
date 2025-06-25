import React, { useState } from 'react';
import { Search } from 'lucide-react'; // or use any icon

const ExpandableSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Search Icon Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-orange-500"
        >
          <Search size={20} className='w-5 h-5 cursor-pointer' />
        </button>
      )}

      {/* Search Box */}
      {open && (
        <>
        <div className="absolute left-0 right-0  top-16 bottom-.5 flex items-center w-full border border-orange-500 rounded-md overflow-hidden bg-white duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 focus:outline-none"
          />
          <a href="#"
            onClick={() => setOpen(false)}
            className="px-4 text-orange-500 font-bold cursor-pointer"
          >
            ✕
          </a>
          
        </div>
         <Search size={20} className='w-5 h-5'/>
        </>
      )}
    </div>
  );
};

export default ExpandableSearch;
