import React from "react";

const Instagram = () => {
  return (
    <div style={{ marginTop: "60px" }} className="container">
      <br />
      <br />
      <hr />
      <div>
        <h1 className="my fb tac my-3 my fb5">Follow me on Instagram</h1>
      </div>
      <div className="text-center">
        <a 
          href="https://www.instagram.com/clickbuzz_photography/"
          target={"_blank"} rel="noopener noreferrer"
        >
          <button className=" my fb">
            <i className="fa-brands fa-instagram"></i> clickbuzz_photography
          </button>
        </a>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a 
                className="block relative h-48 rounded overflow-hidden"
                target={"_blank"} rel="noopener noreferrer"
                href="https://www.instagram.com/p/CoKV6XkvNtZ/"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={require("./img/Image1.jpg")}
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a 
                className="block relative h-48 rounded overflow-hidden"
                href="https://www.instagram.com/p/Cn9mONlMnDj/"
                target={"_blank"} rel="noopener noreferrer"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={require("./img/image2.jpg")}
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/461x361/?wild"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/461x361/?lady"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/461x361/?baby"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/461x361/?teen"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/461x361/?food"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/461x361/?poor"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
      </div>
    </div>
  );
};

export default Instagram;
