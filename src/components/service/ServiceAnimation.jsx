import React from "react";

const ServiceContent = [
  {
    icon: "icon-lightbulb",
    title: "Discovery: Lean Startup",
    descriptions: `I strive to build inspiring products that solve real problems. I use the lean startup to validate my assumptions and learn from user feedback `,
    delayAnimation: "",
  },
  {
    icon: "icon-tools-2",
    title: "SCRUM & KANBAN",
    descriptions: `It is not only the What but also the How. I use SCRUM and KANBAN to ensure effective delivery in this dinamyc product landscape`,
    delayAnimation: "200",
  },
  {
    icon: "icon-strategy",
    title: "Project Management",
    descriptions: `Good project management comes with experience. With five years of experience in the field, this is more than ensured.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-genius",
    title: "Data Science",
    descriptions: `I began learning Data Science last year, but good problem-solving skills, judgment and intuition are developed over the years.`,
    delayAnimation: "500",
  },
  {
    icon: "icon-gears",
    title: "Machile Learning",
    descriptions: `I am always learning and exploring new possibilities with machine learning. With Scikitlearn, I create and apply supervised learning models`,
    delayAnimation: "600",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
