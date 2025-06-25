import { ShoppingCart } from 'lucide-react';
import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet-async';

const EmptyCart = () => {
  return (
     <>
<Helmet>
  <title>Cart (0)</title>
  <meta name="description" content="Learn more about our mission and team." />
</Helmet>
<Header />


    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven’t added anything to your cart yet.
      </p>
      <a
        href="/shop"
        className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
      >
        Start Shopping
      </a>
    </div>

    <Footer />
   </>
  );
};

export default EmptyCart;
