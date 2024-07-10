import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.scss";

export const Experience = () => {
  const experienceConfig = [
    {
      companyNameRole: "CitiusTech - Technical Lead",
      timeRange: "Mar 2022 - Present",
      rolesResponsibilites: [
        "Create high-quality software architecture and design",
        "Identify, prioritize and carry out tasks across the software development life cycle",
        "Create tools and applications by developing clean, efficient code",
        "Utilize tools and programming to automate tasks",
        "Code review and debugging",
      ],
    },
    {
      companyNameRole: "Infosys - Technology Analyst",
      timeRange: "May 2018 - Mar 2022",
      rolesResponsibilites: [
        "Create high-quality software architecture and design",
        "Identify, prioritize and carry out tasks across the software development life cycle",
        "Create tools and applications by developing clean, efficient code",
        "Utilize tools and programming to automate tasks",
        "Code review and debugging",
      ],
    },
    {
      companyNameRole:
        "Graduation - Bacholor's of Engineering in Information Techology",
      timeRange: "July 2013 - July 2017",
      rolesResponsibilites: [
        "Create high-quality software architecture and design",
        "Identify, prioritize and carry out tasks across the software development life cycle",
        "Create tools and applications by developing clean, efficient code",
        "Utilize tools and programming to automate tasks",
        "Code review and debugging",
      ],
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="experience" className="experience-container">
      <h2  className="header">Work Experience</h2>
      <div className="experience-container-content">
        <Carousel
          responsive={responsive}
          infinite={true}
        >
          {experienceConfig.map((ec) => (
            <div className="experience-container-content-card">
            <div className="experience-container-content-card-content">
              <h4 className="exp-card-company-name">{ec.companyNameRole}</h4>
              <h5 className="exp-card-time">{ec.timeRange}</h5>
              <div>
                <ul className="exp-card-roles-responsibilities">
                  {ec.rolesResponsibilites.map((r) => (
                    <li>
                      <h6>{r}</h6>
                    </li>
                  ))}
                </ul>
              </div>
              </div>  
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
