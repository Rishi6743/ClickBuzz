import React from 'react'
import { Link } from 'react-router-dom'

const MyworkBasic = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">A Premium Collection of My Work</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Explore the art of storytelling through premium and timeless imagery, showcasing love, joy, and life's precious moments.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn0.weddingwire.in/article/9086/3_2/960/jpg/16809-creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpeg"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Wedding</h2>
        <p className="text-base leading-relaxed mt-2">Create lasting memories of your special day with timeless and beautiful wedding photography, capturing love and joy with happiness and positivity.</p>
      
             <Link to={"/wedding"}> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See more</button></Link>
              
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://www.glamflame.net/wp-content/uploads/2018/02/736da858437249.59fc1bda8c364.jpg"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Fashion</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
      
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Say Hello  </button>
              
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://121clicks.com/wp-content/uploads/2018/02/avishek_das_indian_photographer_interview_121_clicks_04.jpg"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Documentary</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
     
        
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Say Hello  </button>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default MyworkBasic
