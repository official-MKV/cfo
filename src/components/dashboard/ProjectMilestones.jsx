// components/ProjectMilestones.jsx
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const MilestoneStatus = ({ status }) => {
  if (status === "Completed") {
    return (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
        Completed
      </Badge>
    );
  } else if (status === "Ongoing") {
    return (
      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
        Ongoing
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
        Upcoming
      </Badge>
    );
  }
};

const MilestoneItem = ({ milestone }) => {
  const isCompleted = milestone.status === "Completed";

  return (
    <div className="flex items-start gap-3 mb-4">
      <Checkbox
        id={`milestone-${milestone.id}`}
        checked={isCompleted}
        className="mt-1"
      />
      <div className="flex-1">
        <div className="flex flex-col">
          <label
            htmlFor={`milestone-${milestone.id}`}
            className="text-base font-medium cursor-pointer"
          >
            {milestone.title}
          </label>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <span>Due: {milestone.dueDate}</span>
            <span className="ml-2">
              <MilestoneStatus status={milestone.status} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectMilestones = ({ milestones }) => {
  return (
    <div className="border border-primary/40 rounded-lg p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-primary">Milestone</h3>
      </div>
      <div className="space-y-2">
        {milestones.map((milestone) => (
          <MilestoneItem key={milestone.id} milestone={milestone} />
        ))}
      </div>
      <div className="text-muted-foreground">
        <Button
          variant="outline"
          className="flex items-center border-muted-foreground"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload document
        </Button>
      </div>
    </div>
  );
};

export default ProjectMilestones;
