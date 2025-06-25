
import './Header.css';
//import Navbar from "./Navbar";
import MegaMenu from "./MegaMenubar";
import Topnav from "./Topnav";
import { Mail, Phone} from 'lucide-react';

const Header = () => {
  return (
    <header className='shadow-md'>

     <div className='hidden md:block'> <Topnav /></div>
     <div className='clear-both'></div>
    {/*<div><Navbar /></div>*/}
      <div className='max-w-7xl mx-auto relative'><MegaMenu /></div>

<div className='flex justify-between px-4 bg-blue-900 py-2 text-white mt-2 block md:hidden'>
<a href='tel:+919643203209' className='flex gap-2 items-center'> <Phone size={16} /> +919643203209</a> <a href='mailto:info@ebizfiling.com' className='flex gap-2 items-center'><Mail size={16} /> info@ebizfiling.com</a>

</div>


    </header>
  );
}

export default Header;
