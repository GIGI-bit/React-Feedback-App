/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
