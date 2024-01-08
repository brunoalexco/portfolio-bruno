import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Product Owner & Data Scientist</p>
                  <h3>Bruno Cornelio</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                  I'm a Product Owner with five years of professional experience, including one year in the PO role. I live in Lima, Peru, for most of the year, but I also travel to other regions of Peru or abroad occasionally. I’m a creative and analytical thinker who can take a digital product from an idea to an MVP. I use Figma to create wireframes, I have intermediate skills in Data Science, and I know the fundamentals of coding.
                  </p>
                  <p>
                  I have a diverse background in different fields and roles. I started as a Trainee of systems and processes, where I developed an LMS with Docebo. Then, I got promoted to Project Coordinator. During the pandemic, I started a digital marketing agency, which didn't work out, but I earned a lot of insights into the digital world and how to handle clients. After that, I worked as a Success Manager. This experience helped me improve my communication skills and understand what the clients need. At the beginning of 2023, I suggested to the CTO that I should be the Product Owner of a new product that the company wanted to launch.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Bruno Cornelio</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>6th October 1996</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>27 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Lima</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+51) 955 798 986</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>alexco.bruno@gmail.com</span>
                        </li>
                        {/* <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li> */}
                        <li>
                          <label>Data Science Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div>

          <Awards />
          End Awards */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
