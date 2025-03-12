// components/ProjectDetailsSection.jsx
import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, CalendarCheck } from "lucide-react";

const ProjectDetailsSection = ({ project }) => {
  return (
    <div className=" border border-primary/40 rounded-lg p-5">
      <h3 className="text-lg font-semibold mb-4 text-primary">Project Title</h3>
      <h2 className="text-xl font-bold mb-6">{project.title}</h2>

      <h3 className="text-lg font-semibold mb-4 text-primary">Advisors</h3>
      <div className="flex gap-4 mb-6">
        {project.advisors.map((advisor) => (
          <div key={advisor.id} className="flex items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 mr-2 overflow-hidden">
              {advisor.imgSrc ? (
                <Image
                  src={advisor.imgSrc}
                  alt={advisor.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              ) : (
                <span className="text-sm font-medium">{advisor.initials}</span>
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{advisor.name}</p>
              <p className="text-xs text-muted-foreground">{advisor.title}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4 text-primary">Status</h3>
      <div className="mb-6">
        <p className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium mb-2">
          {project.status}
        </p>
        <div className="flex items-center mb-2">
          <Progress value={project.percentCompleted} className="flex-1 h-2" />
          <span className="text-sm ml-2">
            {project.percentCompleted}% completed
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center text-sm">
            <img
              src="/icons/rocket.svg"
              className="h-4 w-4 mr-1 text-blue-600"
            />
            <span>Start: {project.startDate}</span>
          </div>
          <div className="flex items-center text-sm">
            <img
              src="/icons/goals.svg"
              className="h-4 w-4 mr-1 text-blue-600"
            />
            <span>End: {project.endDate}</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-primary">Billings</h3>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${project.billing.amount}</span>
        <span className="text-sm">{project.billing.type}</span>
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
