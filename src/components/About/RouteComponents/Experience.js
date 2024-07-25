import React from "react";

import "../../../styles/About/Route/Experience.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience__container">
          <div className="experience__header">
            <h2 className="experience__number">
              0<span>2</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>xperience</span>.
            </h1>
          </div>
          <div className="experience__description">
            <div className="experience__main-box">
              <div className="experience__box">
                <h2>XYZ Pvt Ltd</h2>
                <h2>Associate Software Developer</h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp; &nbsp;01/10/2021 - 31/11/2022
                </h3>
                <ul>
                  <p>Technologies</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      C#, .NET Core 8.0, Entity Framework Core, ASP.NET Core
                      Identity, SQL Server, Azure
                    </span>
                  </li>
                  <p>Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Implemented secure authentication, registration, and email
                      confirmation
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>ASP.NET Core Identity and JWT.</span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600">
                    <span>Developed CRUD functionality and Built APIs </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600">
                    <span>Utilized LINQ for efficient data filtering </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600">
                    <span>
                      Developed methods to clear cookies and expire tokens on
                      logout
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="800">
                    <span>Integrated robust error handling and logging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
