// components/ProjectCreateStepIndicator.jsx
import React from "react";

const ProjectCreateStepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full flex-1 ${
            index + 1 === currentStep
              ? "bg-blue-600"
              : index + 1 < currentStep
              ? "bg-blue-200"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectCreateStepIndicator;
