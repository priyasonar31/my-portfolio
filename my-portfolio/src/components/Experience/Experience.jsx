import Carousel from "react-multi-carousel";
import { responsive, experienceConfig } from "../constants";
import "react-multi-carousel/lib/styles.css";
import "./styles.scss";

export const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2 className="header">Work Experience</h2>
      <div className="experience-container-content">
        <Carousel responsive={responsive} infinite={true}>
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
