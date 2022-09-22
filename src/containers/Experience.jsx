import React from "react";
import ResumeArticle from "../components/ResumeArticle";

const Experience = ({ experience }) => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>Опыт работы</h2>
      </div>

      <div className="section-content">
        {experience.map((job) => (
          <ResumeArticle
            key={job.job}
            title={job.job}
            subtitle={job.company}
            subtitleDesctiption={job.position}
            {...job}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
