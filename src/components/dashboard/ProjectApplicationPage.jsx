import React from "react";
import { Button } from "../ui/button";
import { FilePlus } from "lucide-react";

const ProjectsApplicationPage = ({ applications }) => {
  if (!applications) {
    return (
      <div className="w-[80vw] h-[60vh] flex  gap-2 flex-col  justify-center items-center">
        <div className="">
          <img className="size-32" src="/icons/projects_icon.svg" />
          <div className="mb-3">
            <p className="font-bold">No Application</p>
            <p className="text-muted-foreground">
              No advisor has made an application
              <br /> for your project
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <div>ProjectsDocumentPage</div>;
};

export default ProjectsApplicationPage;
