import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>Навыки</h2>
      </div>
      <div
        className="section-content"
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          maxWidth: "800px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              padding: "8px 16px",
              border: "1px solid #ccc",
              borderRadius: "24px",
              margin: "8px 16px 8px 0",
              fontSize: "16px",
              fontWeight: 300,
            }}
          >
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
