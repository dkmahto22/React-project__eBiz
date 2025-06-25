
import './Header.css';
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Topnav = () => {
  return (
    <>

     <div className='flex justify-end max-w-7xl mx-auto px-4'>
     <ul className='tnav md:flex justify-end gap-6 bg-blue-900 text-white p-3 inline-block w-1/2 rounded-es-full items-center'>
        <li className=''><a href='#' className='text-white'>+919643203209</a></li>
        <li className=''><a href='#'>info@ebizfiling.com</a></li>
        <li className=''><Link to="/about"> About us</Link></li>
        <li className=''> <Link to="/contact"> Contact us </Link> </li>
        <li className=''><Link to="/cart"> <ShoppingCart size={20} className="text-orange-500" /></Link></li>
     </ul>
     </div>




    </>
  );
}

export default Topnav;
