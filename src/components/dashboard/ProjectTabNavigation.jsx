// components/ProjectTabNavigation.jsx
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ProjectTabNavigation = ({ projectId }) => {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Details" },
    { id: "documents", label: "Documents" },
    { id: "applicants", label: "Applicants" },
  ];

  return (
    <div className="flex border-b mb-6">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={`/projects/${projectId}?tab=${tab.id}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(tab.id);
          }}
          className={cn(
            "px-4 py-2 font-medium text-sm",
            activeTab === tab.id
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default ProjectTabNavigation;
