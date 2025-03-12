"use client";

import { useEffect, useState } from "react";
import { fullProjectsData } from "@/data";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectHeader from "@/components/dashboard/ProjectHeader";
import ProjectDetailsSection from "@/components/dashboard/ProjectDetailsSection";
import ProgressSection from "@/components/dashboard/ProgressSection";
import ProjectMilestones from "@/components/dashboard/ProjectMilestones";
import ProjectDescriptionSection from "@/components/dashboard/ProjectDescriptionSection";
import BillingDetailsSection from "@/components/dashboard/BillingDetailsSection";
import ProjectsDocumentPage from "@/components/dashboard/ProjectsDocumentPage";
import ProjectsApplicationPage from "@/components/dashboard/ProjectApplicationPage";

export default function ProjectDetailPage({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProject = fullProjectsData.find(
        (p) => p.id === parseInt(params.id)
      );
      setProject(foundProject || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <Skeleton className="h-10 w-10 rounded-full mr-3" />
            <Skeleton className="h-8 w-48" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Skeleton className="h-10 w-full max-w-md" />
            <div className="flex gap-2">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>

        <Skeleton className="h-12 w-64 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
          <div className="md:col-span-1">
            <Skeleton className="h-64 w-full rounded-lg mb-6" />
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
          <div className="md:col-span-1">
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p>
          The project you're looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  const renderDetailsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <ProjectDetailsSection project={project} />
      </div>

      <div className="md:col-span-1 space-y-6">
        <ProgressSection percentage={project.percentCompleted} />
        <ProjectMilestones milestones={project.milestones} />
      </div>

      <div className="md:col-span-1 space-y-6">
        <ProjectDescriptionSection
          description={project.description}
          deliverables={project.deliverables}
        />
        <BillingDetailsSection milestones={project.milestones} />
      </div>
    </div>
  );

  const renderDocumentsContent = () => <ProjectsDocumentPage />;

  const renderApplicantsContent = () => <ProjectsApplicationPage />;

  return (
    <div className="container  mx-auto px-4 py-6 w-full h-full ">
      <ProjectHeader projectTitle={project.title} projectRisk={project.risk} />

      <Tabs
        defaultValue="details"
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-6"
      >
        <TabsList className="bg-background">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-6">
          {renderDetailsContent()}
        </TabsContent>

        <TabsContent value="documents" className="mt-6">
          {renderDocumentsContent()}
        </TabsContent>

        <TabsContent value="applicants" className="mt-6">
          {renderApplicantsContent()}
        </TabsContent>
      </Tabs>
    </div>
  );
}
