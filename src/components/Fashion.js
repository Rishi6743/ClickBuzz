import React from "react";
import ImageHeading from "./ImageHeading";

const Fashion = () => {
  return (
    <>
      <ImageHeading heading={"Explore Our Fashion Collection"} />
      <div className="container">
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 ">
          {/* <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Explore Our Wedding Collection</h1> */}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://i.pinimg.com/originals/d4/2d/a3/d42da3fce8d0d279d4db65ae68e7a2dd.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://i.pinimg.com/736x/20/f4/d6/20f4d647733f0aa3c55c7a750ccb4db0.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <img
              src="https://images.news18.com/ibnlive/uploads/2021/04/1617787135_120988288_338947640652818_3404623576422717576_n.jpg?impolicy=website&width=0&height=0"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27840283466567.5d3da5b57ab4c.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://i.pinimg.com/originals/29/79/6f/29796fca44ddcf01f8f1d0b912f1e27d.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://www.lizmarieportraits.com/wp-content/uploads/2020/08/woodbridge-va-photographer-liz-marie-boudoir-portraits.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            {/* <img
              src="https://i.pinimg.com/originals/29/79/6f/29796fca44ddcf01f8f1d0b912f1e27d.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            /> */}
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://i.pinimg.com/236x/30/4c/f9/304cf9f6ab2068b9b2e9baca6a5ba571.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://static.toiimg.com/photo/74654881.cms"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <img
              src="https://1.bp.blogspot.com/-HkUe1jhOgNo/YGXRcSQU_kI/AAAAAAAAGQo/IwLqIcLpIL8RQWYTsVfyWKvk_vgrZbrOwCLcBGAsYHQ/s782/Lavanya-Tripathi-6.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fashion;
