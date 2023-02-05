import React from "react";
import ImageHeading from "./ImageHeading";

const Documentary = () => {
  return (
    <>
      <ImageHeading heading={"Explore Our Documentary Collection"} />
      <div className="container">
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 ">
          {/* <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Explore Our Wedding Collection</h1> */}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://121clicks.com/wp-content/uploads/2018/02/avishek_das_indian_photographer_interview_121_clicks_16.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://www.josejeuland.com/wp-content/uploads/2020/05/65-Gypsy-Kalbelia-tribe-nomad-Rajasthan-India-Documentary-Photography-Jose-Jeuland-Photographer.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <img
              src="https://live.staticflickr.com/5124/5329871446_3a3157023f_b.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://121clicks.com/wp-content/uploads/2018/02/avishek_das_indian_photographer_interview_121_clicks_25.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-5DTXgign2VjTmK71uvDd5_v_3Y52IhapS2WT95Jx3mPgPDTCmDcQZbCXgASvtBIaKs&usqp=CAU"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="https://121clicks.com/wp-content/uploads/2018/02/avishek_das_indian_photographer_interview_121_clicks_27.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/15/27/49/1000_F_215274907_gEV9fbcGpDs3BNyvyLUhRv0SkqjVSn6z.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXq3UkukVWpZOcOx_ZOMHFUb242FfvLe-ZQ&usqp=CAU"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtN0bLaO3ebruFKErgswgVeOW-NZfYPHISg&usqp=CAU"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentary;
