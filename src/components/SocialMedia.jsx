import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";



const social = [
  {
    title: "Facebook",
    icon: <Facebook size={32} className="hover:text-blue-600 " />,
    link: "#facebook",
  },
  
  {
    title: "Twitter/X",
    icon: <Twitter  size={32} className="hover:text-sky-500" />,
    link: "#Twitter",
  },
  
  {
    title: "Linkedin",
    icon: <Linkedin size={32} className="hover:text-blue-700" />,
    link: "#Linkedin",
  },
  
  {
    title: "Instagram",
    icon: <Instagram size={32} className="hover:text-pink-500" />,
    link: "#Instagram",
  },
  




];

const SocialMedia = () => {
  return (
   
    <div className="flex gap-4 mb-4">
  {social.map((socialicon, index) => (
      <a key={index} href={socialicon.link} target="_blank" rel="noopener noreferrer"
         className="text-gray-500 transition" title={socialicon.title} >
         {socialicon.icon}
      </a>
  ))}
    </div>
  )
}

export default SocialMedia