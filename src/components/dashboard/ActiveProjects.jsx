import React from "react";
import { Button } from "../ui/button";
import { Newspaper } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ActiveProjects = ({ projects }) => {
  return (
    <div>
      <div className="flex gap-2 text-foreground mb-[20px]">
        <img src="/icons/tripledot_icon.svg" />
        <span>Active Projects</span>
      </div>
      <div className="w-full h-[30vh] text-foreground">
        {projects.length == 0 ? (
          <div className="w-full  suitcase.png border border-primary/33 h-full gap-3  relative rounded-sm flex flex-col items-center justify-center">
            <img className="w-18 h-18 " src="/dashboard/suitcase.png" />
            <p className="font-medium">No project in progress right now</p>
            <Button
              variant="outline"
              className="text-primary hover:border-primary hover:text-primary"
            >
              <Newspaper />
              Create New project
            </Button>
          </div>
        ) : (
          <div>
            {projects.map((project) => (
              <ProjectCard project={project} id="key" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveProjects;
