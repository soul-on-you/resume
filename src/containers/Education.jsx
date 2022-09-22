import React from "react";
import ResumeArticle from "../components/ResumeArticle";

const Education = ({ education }) => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>Образование</h2>
      </div>
      <div className="section-content">
        {education.map((item) => (
          <ResumeArticle
            key={item.degree}
            title={item.degree}
            subtitle={item.place}
            subtitleDesctiption={item.city}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
