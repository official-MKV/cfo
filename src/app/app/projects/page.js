"use client";

import { useEffect, useState } from "react";
import ProjectsLayout from "@/components/dashboard/ProjectsLayout";
import { projects } from "@/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-32 ml-2" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 flex-1">
            <Skeleton className="h-10 w-full max-w-md" />
            <Skeleton className="h-10 w-48" />
          </div>

          <div className="flex gap-2">
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="h-64 w-full rounded-lg" />
            ))}
        </div>
      </div>
    );
  }

  return <ProjectsLayout projects={projects} />;
}
