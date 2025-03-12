"use client";

import { useState } from "react";

import { Sidebar } from "@/components/SideBar";
import { Header } from "@/components/Header";
import { Calendar } from "lucide-react";
import CreateProjectOverlay from "@/components/dashboard/CreateProjectOverlay";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          username="Uche"
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="flex-1 overflow-y-auto bg-background px-5   ">
          <div className="w-full  flex  justify-end mb-3">
            <div className="flex items-center border rounded-md px-2 py-1">
              <span className="text-sm mr-2">This month</span>
              <Calendar className="h-4 w-4" />
            </div>
          </div>
          <div className="border rounded-sm h-[90%] overflow-hidden p-3 overflow-y-scroll">
            {children}
          </div>
        </main>
      </div>
      <CreateProjectOverlay />
    </div>
  );
}
