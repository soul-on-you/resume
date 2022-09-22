import React from "react";

const AboutMe = ({ me }) => {
  return (
    <div className="section aboutme">
      <div className="section-title">
        <h2>{me.name}</h2>
        <p>Город - {me.city}</p>
        <p>
          <a href={me.phoneLink}>{me.phone}</a>
        </p>
        <p>
          <a href={me.emailLink}>{me.email}</a>
        </p>
        <div className="social-links" style={{ marginTop: 16 }}>
          {me.socialLinks.map((link) => (
            <a style={{ marginRight: 8 }} key={link.key} href={link.link}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="section-content">
        <p
          style={{
            maxWidth: "680px",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          {me.myDescription}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
