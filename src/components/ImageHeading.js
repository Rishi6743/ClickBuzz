import React from 'react'
import './ImageHeading.css'
const ImageHeading = (props) => {
  return (
    
      <header>
  <div className="relative overflow-hidden bg-no-repeat bg-cover sty my-4" >
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed sty2"
      >
      <div className="flex justify-center items-center h-full">
        <div className="text-center text-white px-6 md:px-12">
                          <h1 className="text-5xl font-bold mt-0 mb-6 my" >{props.heading}</h1>
        
        </div>
      </div>
    </div>
  </div>

</header>

  )
}

export default ImageHeading
