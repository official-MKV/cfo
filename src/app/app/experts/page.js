"use client";

import { useEffect, useState } from "react";
import ExpertsLayout from "@/components/dashboard/ExpertLayout";
import { financialExperts } from "@/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExpertsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

        <Skeleton className="h-12 w-full mb-6" />

        <Skeleton className="h-8 w-48 mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="h-64 w-full rounded-lg" />
            ))}
        </div>
      </div>
    );
  }

  return <ExpertsLayout experts={financialExperts} />;
}
