import React from "react";
import { Link } from "react-router-dom";
// import Carousel from "./Carosel";
import "./Myself.css";

const Myself = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 my">
              Hello, I am Vikram. A Wedding & Lifestyle Photographer.
            </h1>
            <p className="mb-8 leading-relaxed my fb">
              Hello, I am Vikram Baijant, a lifestyle photographer based in Bilaspur,
              India. My passion is to document the fleeting moments of love to
              create timeless, beautiful images as memories. I love capturing
              weddings, elopements and also families. My style is minimal,
              natural and understated. Looking forward to capturing your special
              day for eternity!
            </p>
            <Link to={"/contact"}>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 my fb px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Book a Photo Shoot{" "}
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Myself;
