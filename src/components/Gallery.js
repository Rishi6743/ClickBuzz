import React from "react";
import ImageCard from "./ImageCard";
import ImageHeading from "./ImageHeading";
// import MyworkBasic from './MyworkBasic'

const Gallery = () => {
  return (
    <>
      <ImageHeading heading={"#gallery"} />
      <div className="container">
        <div className="row ">
          <div className="col-md-6 my-5">
            <ImageCard
              src={"https://wallpaperaccess.com/full/2008544.jpg"}
              title={"Check out the Wedding collection"}
              path={"/wedding"}
            />
          </div>
          <div className="col-md-6 my-5">
            <ImageCard
              src={
                "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2014_09/220386/140228-yamamoto-01-1811.jpg"
              }
                          title={"Check out the Fashion collection"}
                          path={"/fashion"}
            />
          </div>
          <div className="col-md-6 my-5">
            <ImageCard
              src={
                "https://cdn.pixabay.com/photo/2017/07/22/20/40/girl-2529907__480.jpg"
              }
              path={"/docmentary"}
              title={"Check out the Documentary collection"}
            />
          </div>
          {/* <div className="col-md-6 my-5">
            <ImageCard
              src={
                "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2014_09/220386/140228-yamamoto-01-1811.jpg"
              }
              title={"Check out the Fashion collection"}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;
