import React from 'react'




const PageStrip = ({ iptitle, pinfo }) => {



  return (


<div  style={{ 
    backgroundImage: `linear-gradient(rgb(255 229 30 / 94%), rgb(255 73 0 / 83%)), url(src/assets/images/bgimg.jpg)`,
  // Other background properties you might need:
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
    
    
    }} className="shadow-md py-4">



<div className="content-area1 max-w-7xl mx-auto py-20 px-4 text-center">

<h1 className="text-4xl font-bold mb-3 text-white">{iptitle}</h1>
<p>{pinfo}</p>




</div>


</div>


  )
}


export default PageStrip;