import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Newspaper } from "lucide-react";
import ActiveProjects from "@/components/dashboard/ActiveProjects";
import { projects } from "@/data";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full overfl">
      <div className="w-full justify-end flex gap-2">
        <Button className="text-primary" variant="ghost">
          <Plus />
          Request a service
        </Button>
        <Button>
          <Newspaper />
          Create a Project
        </Button>
      </div>
      <div className="bg-primary w-full h-[160px] rounded-sm my-[30px] items-center justify-center  flex">
        <div className="text-primary-foreground h-full justify-center flex flex-col">
          <p className="font-medium text-3xl">Welcom Uche,</p>
          <p className="font-light max-w-[80%]">
            Find solutions fast. Get started and connect with experts to get
            your work done.
          </p>
        </div>
        <div>
          <img src="/dashboard/welcome_banner.svg" />
        </div>
      </div>
      <ActiveProjects projects={projects} />
      {/* Experts Component */}
    </div>
  );
};

export default page;
