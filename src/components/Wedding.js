import React from "react";
import ImageHeading from "./ImageHeading";
import "./Wedding.css";

const Wedding = () => {
  return (
    <>
      <ImageHeading heading={"Explore Our Wedding Collection"} />
      <div className="container">
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 ">
          {/* <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Explore Our Wedding Collection</h1> */}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://shaadiwish.com/blog/wp-content/uploads/2022/01/adorable-couple-photos.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://www.cinestyleindia.in/wp-content/uploads/2021/08/ser2-683x1024.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://cdn0.weddingwire.in/vendor/9600/3_2/960/jpg/maharashtrian-1-11_15_49600.jpeg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://media.istockphoto.com/id/1147912347/photo/portrait-of-a-indian-bride-in-studio-light-asian-bride.jpg?s=612x612&w=0&k=20&c=V2mTMhzO7OqMJEMe2CMlUtWCC1YUBe2uRwmqtOz0EHM="
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="https://i.pinimg.com/originals/c0/70/b2/c070b2e3c3bd501251e7759d145f64d8.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://i.pinimg.com/236x/6c/b0/de/6cb0de0ffd46c0e5035c0bbc27a5db00--telugu-wedding-saree-wedding.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5ZUQyzyyfFC6N6PP3QnlZDmOLkW24qbPWwP9pzIwaELAGna7T1t_oDzlNvj4g3QLaJ4&usqp=CAU"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wedding;
