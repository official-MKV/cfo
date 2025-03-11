import React from "react";
import { Button } from "../ui/button";
import { FilePlus } from "lucide-react";

const ProjectsDocumentPage = ({ documents }) => {
  if (!documents) {
    return (
      <div className="w-[80vw] h-[60vh] flex  gap-2 flex-col  justify-center items-center">
        <div className="">
          <img className="size-32" src="/icons/projects_icon.svg" />
          <div className="mb-3">
            <p className="font-bold">No Documents</p>
            <p className="text-muted-foreground">
              Documents hold information that aid
              <br /> the advisor
            </p>
          </div>
          <Button>
            <FilePlus />
            Add Document
          </Button>
        </div>
      </div>
    );
  }
  return <div>ProjectsDocumentPage</div>;
};

export default ProjectsDocumentPage;
