import React from "react";
import './Carosel.css'

const Carousel = () => {

  
  return (
     
        <div
  id="carouselDarkVariant"
  className="carousel slide carousel-fade carousel-dark relative px-4"
  data-bs-ride="carousel"
>
  {/* <!-- Indicators --> */}
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  {/* <!-- Inner --> */}
  <div className="carousel-inner relative w-full overflow-hidden cr"  >
    {/* <!-- Single item --> */}
    <div className="carousel-item  active relative float-left w-full">
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indian-fashion-designers-1605211357.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
        className="block w-full "
        alt="Motorbike Smoke"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item relative float-left w-full">
      <img
        src="http://www.trueshadesphotography.com/wp-content/uploads/2022/07/one-of-the-best-wedding-photographers-in-mumbai-1.jpg"
        className="block w-full "
        alt="Mountaintop"
      />
      <div className="carousel-caption hidden md:block absolute text-center cr"  >
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://www.trueshadesphotography.com/wp-content/uploads/2022/07/one-of-the-best-wedding-photographers-in-mumbai-7.jpg"
        className="block w-full "
        alt="Woman Reading a Book"
      />
      <div className="carousel-caption hidden md:block absolute text-center cr"  >
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}

  {/* <!-- Controls --> */}
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

 export default Carousel;