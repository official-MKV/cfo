// components/ProjectHeader.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Edit, PlusSquare } from "lucide-react";
import Link from "next/link";

const ProjectHeader = ({ projectTitle, projectRisk }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <Link href="/projects" className="mr-3">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex items-center">
          <span className="text-lg font-medium mr-2">Project</span>
          {projectRisk && (
            <span className="text-lg font-medium text-muted-foreground">
              | {projectRisk}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search project" className="pl-9" />
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" className="flex items-center text-primary">
            <Edit className="mr-2 h-4 w-4" />
            Edit project
          </Button>
          <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
            <PlusSquare className="mr-2 h-4 w-4" />
            Close Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
