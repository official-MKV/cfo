// components/ProjectDescriptionSection.jsx
import React from "react";

const ProjectDescriptionSection = ({ description, deliverables }) => {
  return (
    <div className="border border-primary/40 rounded-lg p-5">
      <h3 className="text-lg font-semibold mb-4  text-primary">
        Project Description
      </h3>
      <p className="text-sm mb-6 ">{description}</p>

      <h3 className="text-lg font-semibold mb-4 text-primary">Deliverables</h3>
      <ul className="list-disc pl-5 space-y-2">
        {deliverables.map((deliverable, index) => (
          <li key={index} className="text-sm">
            {deliverable}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDescriptionSection;
