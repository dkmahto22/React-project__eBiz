import React from 'react'

const SectionTitle = ({ headingtxt}) => {
  return (
   
<div className="heading-section text-center mb-5 text-blue-900">  
<h2 className="text-2xl md:text-4xl font-bold">{headingtxt}</h2>
<hr className="my-4 w-24 mx-auto" />
</div> 
  )
}

export default SectionTitle

