import React from "react";

const SectionTemplate = ({ title, children }) => {
  return (
    <section className="section-template">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionTemplate;