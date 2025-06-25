import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Example API
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
    <Helmet>
  <title>User List | Corporate Legal Service Under company Law</title>
  <meta name="description" content="Learn more about our mission and team." />
</Helmet>
<Header />
    <div className='api-section max-w-7xl mx-auto py-8 px-4'>
      <h2 className='text-2xl font-bold mb-4'>User Details</h2>
<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
{users.map((user) => (
<div className="max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden p-6 border border-gray-100" key={user.id}>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">Username: <span className="font-medium text-gray-700">{user.username} </span></p>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <p><span className="font-semibold">Email:</span> {user.email} </p>
        <p>
          <span className="font-semibold">Address:</span> {user.address.suite}, {user.address.city}, {user.address.zipcode}, <br />
          <span className="text-xs text-gray-500">Lat: {user.address.geo.lat}, {user.address.geo.lng}</span>
        </p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Website:</span> <a href={user.website}>{user.website}</a></p>
      </div>

      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
        <h4 className="text-md font-semibold text-gray-800 mb-1">Company</h4>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="text-sm text-gray-500 italic">{user.company.catchPhrase}</p>
        <p className="text-sm text-gray-500">{user.company.bs}</p>
      </div>
    </div>
 ))}
</div>


    </div>
    <Footer/>
    </>
  );
};

export default UserList;
