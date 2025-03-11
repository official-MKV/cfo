// components/ProgressSection.jsx
import React from "react";
import CircularProgress from "./CircularProgress";

const ProgressSection = ({ percentage }) => {
  return (
    <div className="border border-primary/40 rounded-lg p-5">
      <h3 className="text-lg font-semibold mb-4 text-primary">Progress</h3>
      <div className="flex flex-col items-center">
        <CircularProgress percentage={percentage} />

        <div className="flex w-full justify-between mt-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
            <span className="text-sm">Completed</span>
          </div>

          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-blue-200 mr-2"></div>
            <span className="text-sm">Ongoing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
