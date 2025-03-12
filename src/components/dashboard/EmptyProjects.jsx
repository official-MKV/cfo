// components/EmptyProjects.jsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";

const EmptyProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-4">
        <Image
          src="/icons/projects-empty.svg"
          alt="No Projects"
          width={120}
          height={120}
        />
      </div>

      <h3 className="text-xl font-semibold mb-3">No Projects</h3>

      <p className="text-center text-muted-foreground mb-6 max-w-md">
        Projects are jobs created by you with the intention of acquiring an
        expert to help facilitate the processes.
      </p>

      <Button className="flex items-center">
        <PlusSquare className="mr-2 h-4 w-4" />
        Create Project
      </Button>
    </div>
  );
};

export default EmptyProjects;
