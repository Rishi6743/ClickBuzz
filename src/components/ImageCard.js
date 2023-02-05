import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css";
const ImageCard = (props) => {
  const src = {
    backgroundImage: `url(${props.src})`,
  };
  return (

    <>
      <Link to={`${props.path}`}>
    <div className="container">
      <header>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover style1"
          style={src}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex justify-center items-center h-full style2 my">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl font-bold mt-0 mb-6">{props.title} <br /> &rarr;	</h1>

                {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs my leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Visit the Gallery
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
        </div>
        </Link>
    </>
  );
};

export default ImageCard;
