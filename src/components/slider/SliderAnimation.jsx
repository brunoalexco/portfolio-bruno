import React from "react";
import TextLoop from "react-text-loop";
import { useCss } from "react-use";

const conctInfo = {
  phone: "+51 955798986",
  email: " alexco.bruno@gmail.com",
};

const sliderContent = {
  name: "Bruno Cornelio",
  designation: "Product Owner & Data Scientist",
  description: `I create solutions for my customers,
  specializing in agile product development and creating
  prediction models for your business.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  const photo = useCss({
    transform: "scale(1.3)",
    "@media only screen and (max-width: 360px)": {
      transform: "scale(1.1)",
      marginLeft: "5px",
    },
  });
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+51955798986">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:alexco.bruno@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          {/* <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>
          </div> */}
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Welcome! My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Product Owner</p>
                    <p className="loop-text lead">Data Scientist</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="https://drive.google.com/drive/folders/1bzFqcqPpfGri49yFaC1qEIjDs-RUQfUo?usp=sharing"
                    target="_blank"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className={`hb-me ${photo}`}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
            backgroundPosition: "center",
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
