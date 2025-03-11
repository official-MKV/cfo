// import React from "react";

// const ProjectCard = ({ project }) => {
//   const {
//     title,
//     progress,
//     status,
//     milestones,
//     advisors,
//     totalTasks,
//     completedTasks,
//     budget,
//   } = project;

//   return (
//     <div className="bg-white p-5 rounded-lg border shadow-sm max-w-xl">
//       <div className="flex justify-between items-start mb-4">
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <div className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-md">
//           {status}
//         </div>
//       </div>

//       <div className="mb-5">
//         <div className="text-sm font-medium text-gray-500 mb-2">Milestone</div>
//         <div className="w-full bg-primary h-2 rounded-full mb-3"></div>

//         <ul className="space-y-2 text-sm font-medium text-gray-700 pl-5">
//           {milestones.map((milestone, index) => (
//             <li key={index} className="flex items-center gap-2">
//               <span className="w-1.5 h-1.5 bg-gray-700 rounded-full"></span>
//               {milestone}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mb-4">
//         <div className="text-sm font-medium text-gray-500 mb-2">Advisors</div>
//         <div className="flex gap-3">
//           {advisors.map((advisor, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//               <div>
//                 <div className="font-medium text-sm">{advisor.name}</div>
//                 <div className="text-xs text-gray-500">{advisor.role}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between items-center">
//         <div className="flex gap-5 text-xs text-gray-500">
//           <div className="flex items-center gap-1">
//             <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
//             Total tasks: {completedTasks}/{totalTasks}
//           </div>
//           <div className="flex items-center gap-1">
//             <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
//             Budget: {budget}
//           </div>
//         </div>

//         <div className="relative">
//           {/* Progress circle */}
//           <div className="w-16 h-16 relative">
//             <svg viewBox="0 0 36 36" className="w-full h-full">
//               <path
//                 d="M18 2.0845
//                   a 15.9155 15.9155 0 0 1 0 31.831
//                   a 15.9155 15.9155 0 0 1 0 -31.831"
//                 fill="none"
//                 stroke="#E6E6E6"
//                 strokeWidth="3"
//                 strokeDasharray="100, 100"
//               />
//               <path
//                 d="M18 2.0845
//                   a 15.9155 15.9155 0 0 1 0 31.831
//                   a 15.9155 15.9155 0 0 1 0 -31.831"
//                 fill="none"
//                 stroke="#2563EB" // Primary blue color
//                 strokeWidth="3"
//                 strokeDasharray={`${progress}, 100`}
//               />
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
//               {progress}%
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4">
//         <button className="text-primary font-medium text-sm hover:underline">
//           View Project
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

// components/ProjectCard.jsx
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, CalendarCheck } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/app/projects/${project.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow min-w-[360px] min-h-[260px]">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-2">{project.title}</h3>

          <div className="flex items-center mb-3">
            <Progress value={project.percentCompleted} className="h-2 flex-1" />
            <span className="text-sm text-muted-foreground ml-2">
              {project.percentCompleted}% completed
            </span>
          </div>

          <div className="flex justify-between mb-5">
            <div className="flex items-center text-sm">
              <img
                src="/icons/rocket.svg"
                className="h-4 w-4 mr-1 text-blue-600"
              />
              <span>Start: {project.startDate}</span>
            </div>
            <div className="flex items-center text-sm">
              <img
                src="/icons/goals.svg"
                className="h-4 w-4 mr-1 text-blue-600"
              />
              <span>End: {project.endDate}</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Current milestone</h4>
            <div className="flex items-start gap-2">
              <Checkbox id={`milestone-${project.id}`} className="mt-0.5" />
              <label
                htmlFor={`milestone-${project.id}`}
                className="text-sm leading-tight cursor-pointer"
              >
                {project.currentMilestone}
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Advisors</h4>
            {project.advisors && project.advisors.length > 0 ? (
              <div className="flex -space-x-2">
                {project.advisors.map((advisor) => (
                  <div
                    key={advisor.id}
                    className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden"
                    title={advisor.name}
                  >
                    <Image
                      src={advisor.imgSrc || "/placeholder.jpg"}
                      alt={advisor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No advisor yet</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
