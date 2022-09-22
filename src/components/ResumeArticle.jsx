import React from "react";

const ResumeArticle = ({
  title,
  subtitle,
  subtitleDesctiption,
  years,
  description,
}) => {
  return (
    <div className="section-content">
      <h3 style={{ marginBottom: "4px" }}>{title}</h3>

      <h4 style={{ fontWeight: 400, fontSize: 18 }}>
        <strong>{subtitle}</strong> - {subtitleDesctiption}
      </h4>

      <h4 style={{ marginBottom: "12px", marginTop: "2px" }}>{years}</h4>

      <p
        style={{
          marginBottom: "32px",
          maxWidth: "680px",
          fontWeight: 200,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>

      <div />
    </div>
  );
};

export default ResumeArticle;
