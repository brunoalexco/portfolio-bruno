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
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Ux/Ui Designer</p>
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
                  I am a Product Owner with about 5 years of professional experience and 1 year in the PO position. Most of the year, I live in Lima, Peru, and sometimes I travel to other provinces of Peru or abroad. I am very creative and analytical. I can manage digital products from an idea to the launch of an MVP. I create wireframes in Figma, I have intermediate knowledge of Data Science, and I know the basics of coding.
                  </p>
                  <p>
                  Throughout the years, I have worn several hats. I started as a Trainee of systems and processes, where I developed an LMS with Docebo. Then, I was promoted to Project Coordinator. During the pandemic, I decided to start a digital marketing agency that failed, but I learned a lot about the digital world and how to handle clients. After that, I worked as a Success Manager. This experience involved hundreds of calls and meetings that helped me improve my communication skills and understand the clients' problems. Therefore, I proposed to the CTO that I be the Product Owner of a new product that the company wanted to launch.
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
                        <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li>
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
            <h3>Awards.</h3>
          </div>

          <Awards />
          {/* End Awards */}

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
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
