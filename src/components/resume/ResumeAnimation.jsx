import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Implementation Specialist`,
    jobType: `Openloop Health | Hybrid`,
    jobDuration: `Nov 2023 - Dic 2023`,
    timeDuraton: `Full Time`,
    compnayName: "Openloop Health",
    jobDescription: `I worked on the team responsible for implementing telemedicine solutions in clinics and hospitals in the USA. I was being trained to collaborat on the connections between platforms (Healthie, RCM middleware, Zoho Flow, Zoho Desk) using middlewares and APIs along with the Senior Implementation Managers.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Product Owner`,
    jobType: `Idxboost | Remote`,
    jobDuration: `Jan 2023 - Nov 2023`,
    timeDuraton: `Full Time`,
    compnayName: "Idxboost",
    jobDescription: `At Idxboost, a real estate business accelerator, I designed and launched a new webchat product that connects agents and leads. I led user testing, product development, and MVP launch with a team of developers using scrum. I also onboarded early adopters, analyzed KPIs, and trained my team and users.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Success Manager`,
    jobType: `Tremgroup | Remote`,
    jobDuration: `Jul 2021 - Nov 2023`,
    timeDuraton: `Full Time`,
    compnayName: "Tremgroup",
    jobDescription: `At TREM Group, a Miami-based real estate marketing agency, I worked as a Success Manager and a Project Manager. I coordinated with various teams to deliver high-quality websites and PPC campaigns for over 15 clients. I had one of the lowest churn rates in the company. I also led the development and launch of a new product, Vacation Rentals browser, for our client Compass.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Entrepreneurial Experience`,
    jobType: `Digitalem`,
    jobDuration: `Oct 2020 - Jun 2021`,
    timeDuraton: `Full Time`,
    compnayName: "Digitalem",
    jobDescription: `I started a Digital marketing agency specialized in tourism agencies with the goal of boosting their digital presence`,
    delayAnimation: "",
  },
  {
    jobPosition: `Project Coordinator`,
    jobType: `Latamready | On-site`,
    jobDuration: `Mar 2019 - Aug 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Latamready",
    jobDescription: ` At LatamReady, the leading ERP and Tax Compliance company in Latin America, I was a Project Coordinator for LatamReady SuiteApp, a solution integrated with Oracle NetSuite. I led successful implementations for clients in different subsidiaries in LatAm, communicating effectively, coordinating teams, ensuring quality, and completing projects on time.`,
    delayAnimation: "200",
  },
  {
    jobPosition: `System and Processes Trainee`,
    jobType: `Latamready | On-site`,
    jobDuration: `Jan 2019 - Mar 2019`,
    timeDuraton: `Full Time`,
    compnayName: "Latamready",
    jobDescription: ` At LatamReady, the leading ERP and Tax Compliance company in Latin America, I was a Project Coordinator for LatamReady SuiteApp, a solution integrated with Oracle NetSuite. I led successful implementations for clients in different subsidiaries in LatAm, communicating effectively, coordinating teams, ensuring quality, and completing projects on time.`,
    delayAnimation: "300",
  },
];

const educatonContent = [
  {
    passingYear: "2023-2024",
    degreeTitle: "Data Science & Machine Learning",
    instituteName: "Coding Dojo",
  },
  {
    passingYear: "2022",
    degreeTitle: "Especialization in Agile Methodologies",
    instituteName: "Pacifico Business School",
  },
  {
    passingYear: "2014-2019",
    degreeTitle: "Bachelor of Business Administration (BA)",
    instituteName: "Universidad San Ignacio de Loyola",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
